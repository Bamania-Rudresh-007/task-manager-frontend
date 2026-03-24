import useDashboardFunctionalities from "../hooks/dashboardFunctionalities.js";

function TaskCard({ todo, todoId }) {
  const isPending = todo.status === "pending";
    const { deleteTask, updateStatus } = useDashboardFunctionalities()

  return (
    <div className="group bg-[#161616] border border-zinc-800 hover:border-zinc-600 rounded-xl p-5 transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        {/* Left: checkbox + content */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {/* Checkbox */}
          <div
            className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
              isPending
                ? "border-zinc-600 group-hover:border-zinc-400"
                : "border-[#c8f04d] bg-[#c8f04d]"
            }`}
             onClick={() => updateStatus(todo)}
          >
            {!isPending && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path
                  d="M1 4L3.5 6.5L9 1"
                  stroke="#0f0f0f"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p
              className={`font-medium text-sm leading-snug truncate ${
                isPending ? "text-white" : "text-zinc-500 line-through"
              }`}
            >
              {todo.title}
            </p>
            {todo.description && (
              <p className="text-zinc-600 text-xs mt-1 leading-relaxed line-clamp-2">
                {todo.description}
              </p>
            )}
          </div>
        </div>

        {/* Right: status badge + actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              isPending
                ? "bg-zinc-800 text-zinc-400"
                : "bg-[#c8f04d]/10 text-[#c8f04d]"
            }`}
          >
            {isPending ? "Pending" : "Done"}
          </span>

          {/* Delete btn */}
          <button className="opacity-0 group-hover:opacity-100 transition-opacity w-7 h-7 flex items-center justify-center rounded-lg hover:bg-red-500/10 text-zinc-600 hover:text-red-400" onClick={() => {
            deleteTask(todoId);
          }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M1.5 3.5h10M5 3.5V2.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v1M10.5 3.5l-.6 7a1 1 0 01-1 .9H4.1a1 1 0 01-1-.9l-.6-7"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}


export default TaskCard;