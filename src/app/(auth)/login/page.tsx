"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/app/providers";
import { useRouter } from "next/navigation";
import { SmyleIcon } from "@/app/SVG";

export default function LoginPage() {
  const { isAuthenticated, login, checkAuth } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    if (isAuthenticated) {
      router.replace("/");
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated, checkAuth, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    console.log("Attempting login with:", { email, password });

    if (email === "smyl@gamil.com" && password === "121@121") {
      console.log("Credentials match");
      try {
        await login();
        console.log("Login successful");
      } catch (err) {
        console.error("Login error:", err);
        setError("Login failed");
      }
    } else {
      console.log("Credentials mismatch");
      setError("Invalid credentials");
    }
  };

  if (isLoading || isAuthenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center fixed left-0 right-0 top-0 bottom-0 bg-white z-[9999]">
      <div className="bg-[#F4EFDA] rounded-[16px] p-5 xl:p-8 max-w-full md:w-[600px]">
        <div className="text-center">
          <SmyleIcon className="transition-all duration-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-center">Login</h2>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="border-b border-black relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full relative z-1 py-4 text-base bg-transparent focus:outline-none placeholder-black text-black"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete=""
                value={email}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="border-b border-black relative">
              <input
                type="password"
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full relative z-1 py-4 text-base bg-transparent focus:outline-none placeholder-black text-black"
                autoComplete=""
                value={password}
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="text-center mt-20">
            <button className="w-[230px] inline-flex justify-center bg-[#171717] border border-[#171717] text-white py-4 px-6 rounded-[50px] text-base font-medium overflow-hidden relative group transition-all duration-600 ease">
              <div className="translate-y-0 transition group-hover:-translate-y-[150%]">
                Login
              </div>
              <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">
                Login
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
