import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import { useEffect, useState } from "react";
import useUsers from "../context/User.jsx";

export default function Signup() {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const { userDetail, setUserDetail } = useUsers();
    const handleOnChange = (e) => {
        const { id, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [id]: value }));
    };

    useEffect(() => {
        console.log(userDetail);
    }, [userDetail]);

    const handleSubmit = () => {
        if (
            userInfo.email === "" ||
            userInfo.name === "" ||
            userInfo.password === ""
        ) {
            alert("Please fill the field correctly");
            return;
        }
        API.post("/auth/signup", userInfo)
            .then((res) => {
                console.log(res);
                if (res.data.message === "User registered successfully...") {
                    localStorage.setItem("CurrentUserDetail", JSON.stringify(res.data.data))
                    navigate("/dashboard");
                }
            })
            .catch((error) => {
                console.log(error);
            });
        setUserInfo({ name: "", email: "", password: "" });
    };

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
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                            >
                                <path
                                    d="M2 2h4v4H2zM8 2h4v4H8zM2 8h4v4H2zM8 8h4v4H8z"
                                    fill="#0f0f0f"
                                />
                            </svg>
                        </div>
                        <span className="text-white text-xl font-bold tracking-tight">
                            Rudresh<span className="text-[#c8f04d]">.</span>
                        </span>
                    </div>
                    <p className="text-zinc-500 text-sm tracking-widest uppercase">
                        Task Manager
                    </p>
                </div>

                {/* Card */}
                <div className="bg-[#161616] border border-zinc-800 rounded-2xl p-8">
                    <h1 className="text-white text-2xl font-bold mb-1 tracking-tight">
                        Create an account
                    </h1>
                    <p className="text-zinc-500 text-sm mb-8">
                        Start organizing your work in minutes
                    </p>

                    <div className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                onChange={(e) => handleOnChange(e)}
                                className="w-full bg-[#0f0f0f] border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#c8f04d] focus:ring-1 focus:ring-[#c8f04d] transition-colors"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                onChange={(e) => handleOnChange(e)}
                                className="w-full bg-[#0f0f0f] border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#c8f04d] focus:ring-1 focus:ring-[#c8f04d] transition-colors"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                onChange={(e) => handleOnChange(e)}
                                className="w-full bg-[#0f0f0f] border border-zinc-700 rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#c8f04d] focus:ring-1 focus:ring-[#c8f04d] transition-colors"
                            />
                            {/* Password strength hint */}
                            <div className="flex gap-1.5 mt-2">
                                <div className="h-1 flex-1 rounded-full bg-zinc-700" />
                                <div className="h-1 flex-1 rounded-full bg-zinc-700" />
                                <div className="h-1 flex-1 rounded-full bg-zinc-700" />
                                <div className="h-1 flex-1 rounded-full bg-zinc-700" />
                            </div>
                            <p className="text-zinc-600 text-xs mt-1.5">
                                Use 8+ characters with a mix of letters &
                                numbers
                            </p>
                        </div>

                        {/* Submit */}
                        <button
                            className="w-full bg-[#c8f04d] hover:bg-[#d6f76a] text-[#0f0f0f] font-bold py-3 rounded-lg text-sm tracking-wide transition-all active:scale-[0.98] mt-2"
                            onClick={handleSubmit}
                        >
                            Create Account
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-zinc-800" />
                        <span className="text-zinc-600 text-xs">or</span>
                        <div className="flex-1 h-px bg-zinc-800" />
                    </div>

                    <p className="text-center text-zinc-500 text-sm">
                        Already have an account?{" "}
                        <Link
                            to="/"
                            className="text-[#c8f04d] hover:underline font-medium"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>

                <p className="text-center text-zinc-700 text-xs mt-6">
                    © 2025 Doist. All rights reserved.
                </p>
            </div>
        </div>
    );
}
