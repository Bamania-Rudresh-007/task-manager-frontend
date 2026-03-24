import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard.jsx";
import AddTaskModal from "../components/AddTaskModal.jsx";
import useUsers from "../context/User.jsx";
import LogoutModal from "../components/LogoutModal.jsx"
import { useNavigate } from "react-router-dom";
import useDashboardFunctionalities from "../hooks/dashboardFunctionalities..js"

function Dashboard() {
      const { fetchAllTasks, tasks, deleteTask } = useDashboardFunctionalities()
  const [showModal, setShowModal] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [nameAlpahabet, setNameAlpahabet] = useState("");

    const {userDetail} = useUsers();

  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "complete").length;
  const pending = tasks.filter((t) => t.status === "pending").length;
  const percent = Math.round((completed / total) * 100);

    const navigate = useNavigate()
    useEffect(() => {
        if (userDetail?.name) {
            setNameAlpahabet(userDetail.name.split(" ")[0][0].toUpperCase());
        }
    }, [userDetail])


    useEffect(() => {
        fetchAllTasks();
    }, [tasks])

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("CurrentUserDetail");
        navigate("/");
    };

  const filtered =
    activeFilter === "all"
      ? tasks
      : tasks.filter((t) => t.status === activeFilter);

  return (
    <div className="min-h-screen bg-[#0f0f0f] font-mono flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 border-r border-zinc-800 p-6 flex-shrink-0">
        {/* Brand */}
        <div className="flex items-center gap-2 mb-10">
          <div className="w-7 h-7 bg-[#c8f04d] rounded-sm flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2zM8 8h4v4H8z" fill="#0f0f0f" />
            </svg>
          </div>
          <span className="text-white text-lg font-bold tracking-tight">
            Rudresh<span className="text-[#c8f04d]">.</span>
          </span>
        </div>

        {/* Nav */}
        <nav className="space-y-1 flex-1">
          {[
            { icon: "▦", label: "Dashboard", active: true },
            { icon: "◈", label: "All Tasks", active: false },
            { icon: "◎", label: "Pending", active: false },
            { icon: "✓", label: "Completed", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
                item.active
                  ? "bg-[#c8f04d]/10 text-[#c8f04d]"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
              }`}
            >
              <span className="text-base leading-none">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="border-t border-zinc-800 pt-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#c8f04d]/20 border border-[#c8f04d]/30 flex items-center justify-center text-[#c8f04d] text-xs font-bold">
                {nameAlpahabet}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-medium truncate">{userDetail.name}</p>
              <p className="text-zinc-600 text-xs truncate">{userDetail.email}</p>
            </div>
            <button className="text-zinc-600 hover:text-zinc-400 transition-colors text-xs" onClick={() => setShowLogout(true)}>
              ⏻
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
          <div>
            <h1 className="text-white font-bold text-xl tracking-tight">My Tasks</h1>
            <p className="text-zinc-500 text-xs mt-0.5">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-[#c8f04d] hover:bg-[#d6f76a] text-[#0f0f0f] font-bold px-4 py-2.5 rounded-lg text-sm tracking-wide transition-all active:scale-[0.98]"
          >
            <span className="text-lg leading-none">+</span>
            New Task
          </button>
        </header>

        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Total", value: total, color: "text-white" },
              { label: "Pending", value: pending, color: "text-zinc-400" },
              { label: "Done", value: completed, color: "text-[#c8f04d]" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#161616] border border-zinc-800 rounded-xl p-4"
              >
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">
                  {stat.label}
                </p>
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="bg-[#161616] border border-zinc-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-zinc-400 text-xs uppercase tracking-widest">
                Overall Progress
              </span>
              <span className="text-[#c8f04d] text-sm font-bold">{percent}%</span>
            </div>
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#c8f04d] rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="text-zinc-600 text-xs mt-2">
              {completed} of {total} tasks completed
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2">
            {["all", "pending", "complete"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize transition-all ${
                  activeFilter === f
                    ? "bg-[#c8f04d] text-[#0f0f0f]"
                    : "bg-zinc-800 text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {f === "all" ? "All" : f === "pending" ? "Pending" : "Completed"}
              </button>
            ))}
          </div>

          {/* Task list */}
          <div className="space-y-3">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-zinc-600">
                <p className="text-4xl mb-3">◎</p>
                <p className="text-sm">No tasks here yet</p>
              </div>
            ) : (
              filtered.map((todo) => <TaskCard key={todo._id} todo={todo} todoId={todo._id} deleteTask={deleteTask}/>)
            )}
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && <AddTaskModal onClose={() => setShowModal(false)} />}
        {showLogout && (
            <LogoutModal
                onClose={() => setShowLogout(false)}
                onConfirm={handleLogout}
        />
        )}
    </div>
  );
}

export default Dashboard;