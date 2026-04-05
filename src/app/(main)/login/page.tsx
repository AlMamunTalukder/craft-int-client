/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { User, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    credential: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const loadingToast = toast.loading("Logging in...");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            credential: formData.credential,
            password: formData.password,
          }),
          credentials: "include",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
      toast.dismiss(loadingToast);
      toast.success(data.message || "Login successful! ");
      if (data.data?.user) {
        localStorage.setItem("user", JSON.stringify(data.data.user));
      }
      setTimeout(() => {
        if (data.success) {
          router.push("/profile");
        }
      }, 1500);
    } catch (err: any) {
      toast.dismiss(loadingToast);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0B001A] p-4 overflow-hidden">
      {/* --- Abstract Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Purple Glow */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#9617f1] opacity-20 rounded-full blur-[120px] "/>
        {/* Bottom Right Pink Glow */}
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[#f504e9] opacity-15 rounded-full blur-[120px] "/>
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative w-full max-w-md z-10">
        {/* --- Main Login Card --- */}
        <div className="relative bg-[#1A0B2E]/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[2.5rem] p-8 sm:p-10 overflow-hidden group">
          {/* Top Gradient Border */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-[#F300E7] opacity-80"></div>

          {/* Header Section */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2 flex items-center justify-center gap-2">
              স্বাগতম
            </h2>
            <p className="text-gray-400 text-sm font-medium">
              একাউন্টে প্রবেশ করতে আপনার আইডি ও পাসওয়ার্ড দিন
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User ID Field - Changed to credential */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-semibold ml-1">
                ইউজার আইডি / ইমেইল
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500 group-focus-within/input:text-purple-400 transition-colors" />
                </div>
                <input
                  type="text"
                  name="credential"
                  value={formData.credential}
                  onChange={handleInputChange}
                  placeholder="আপনার আইডি বা ইমেইল লিখুন"
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-[#0F0518]/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-semibold ml-1">
                পাসওয়ার্ড (CIIStudent123)
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500 group-focus-within/input:text-purple-400 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-12 py-3.5 bg-[#0F0518]/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            {/* <div className="flex justify-end">
              <a
                href="#"
                className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors hover:underline underline-offset-4"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </a>
            </div> */}

            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-[#4F0187] to-[#F300E7] p-[1px] transition-all hover:shadow-[0_0_20px_rgba(243,0,231,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="relative flex items-center justify-center gap-2 w-full h-full bg-gradient-to-r from-[#4F0187] to-[#8A2BE2] py-3.5 rounded-xl transition-all duration-300 group-hover:bg-opacity-0">
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span className="text-white font-bold text-lg tracking-wide">
                      লগইন করুন
                    </span>
                    <LogIn className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
