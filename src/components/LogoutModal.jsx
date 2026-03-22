function LogoutModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 bg-[#161616] border border-zinc-700 rounded-2xl p-7 w-full max-w-sm shadow-2xl">
        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 mx-auto">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M13 3h4a1 1 0 011 1v12a1 1 0 01-1 1h-4M9 14l4-4-4-4M13 10H3"
              stroke="#ef4444"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="text-white font-bold text-lg tracking-tight text-center mb-1">
          Log out?
        </h2>
        <p className="text-zinc-500 text-sm text-center mb-7 leading-relaxed">
          You'll need to sign in again to access your tasks.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium py-3 rounded-lg text-sm transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-500 hover:bg-red-400 text-white font-bold py-3 rounded-lg text-sm tracking-wide transition-all active:scale-[0.98]"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;