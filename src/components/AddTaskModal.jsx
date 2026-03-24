import { useState, useEffect } from "react";
import useDashboardFunctionalities from "../hooks/dashboardFunctionalities";
function AddTaskModal({ onClose }) {
    const { createTasks } = useDashboardFunctionalities();
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        status: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;

        setNewTask((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = () => {
        console.log(newTask);
        createTasks(newTask);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative z-10 bg-[#161616] border border-zinc-700 rounded-2xl p-7 w-full max-w-md shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-white font-bold text-lg tracking-tight">
                        New Task
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-zinc-500 hover:text-white transition-colors w-7 h-7 flex items-center justify-center rounded-lg hover:bg-zinc-800"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Fix login bug"
                            id="title"
                            onChange={(e) => handleChange(e)}
                            className="w-full bg-[#0f0f0f] border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#c8f04d] focus:ring-1 focus:ring-[#c8f04d] transition-colors"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
                            Description
                        </label>
                        <textarea
                            placeholder="Add some details about this task..."
                            rows={3}
                            id="description"
                            onChange={(e) => handleChange(e)}
                            className="w-full bg-[#0f0f0f] border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#c8f04d] focus:ring-1 focus:ring-[#c8f04d] transition-colors resize-none"
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
                            Status
                        </label>
                        <select
                            className="w-full bg-[#0f0f0f] border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8f04d] focus:ring-1 focus:ring-[#c8f04d] transition-colors"
                            id="status"
                            onChange={(e) => {
                                handleChange(e);
                                console.log(e.target.value);
                            }}
                        >
                            <option value="choose" hidden>
                                Select the status
                            </option>
                            <option value="pending">Pending</option>
                            <option value="complete">Complete</option>
                        </select>
                    </div>
                </div>

                <div className="flex gap-3 mt-7">
                    <button
                        onClick={onClose}
                        className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium py-3 rounded-lg text-sm transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        className="flex-1 bg-[#c8f04d] hover:bg-[#d6f76a] text-[#0f0f0f] font-bold py-3 rounded-lg text-sm tracking-wide transition-all active:scale-[0.98]"
                        onClick={handleSubmit}
                    >
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTaskModal;
