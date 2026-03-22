export default function Login() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4 font-mono">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#c8f04d] opacity-[0.06] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo / Brand */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-[#c8f04d] rounded-sm flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2zM8 8h4v4H8z"
                  fill="#0f0f0f"
                />
              </svg>
            </div>
            <span className="text-white text-xl font-bold tracking-tight">
              Doist<span className="text-[#c8f04d]">.</span>
            </span>
          </div>
          <p className="text-zinc-500 text-sm tracking-widest uppercase">
            Task Manager
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#161616] border border-zinc-800 rounded-2xl p-8">
          <h1 className="text-white text-2xl font-bold mb-1 tracking-tight">
            Welcome back
          </h1>
          <p className="text-zinc-500 text-sm mb-8">
            Sign in to continue to your workspace
          </p>

          <div className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-[#0f0f0f] border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#c8f04d] focus:ring-1 focus:ring-[#c8f04d] transition-colors"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-zinc-400 text-xs uppercase tracking-widest">
                  Password
                </label>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#0f0f0f] border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#c8f04d] focus:ring-1 focus:ring-[#c8f04d] transition-colors"
              />
            </div>

            {/* Submit */}
            <button className="w-full bg-[#c8f04d] hover:bg-[#d6f76a] text-[#0f0f0f] font-bold py-3 rounded-lg text-sm tracking-wide transition-all active:scale-[0.98] mt-2">
              Sign In
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-zinc-600 text-xs">or</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          <p className="text-center text-zinc-500 text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-[#c8f04d] hover:underline font-medium">
              Sign up
            </a>
          </p>
        </div>

        <p className="text-center text-zinc-700 text-xs mt-6">
          © 2025 Doist. All rights reserved.
        </p>
      </div>
    </div>
  );
}