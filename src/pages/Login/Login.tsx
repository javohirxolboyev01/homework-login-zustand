import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../components/zustand/store";
import { mockAuthService } from "../../api/mockAuth";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const { setTokens } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || "/";

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await mockAuthService.login(form.username, form.email);

      const { accessToken, refreshToken } = res.data;

      setTokens(accessToken, refreshToken);
      alert("Login muvaffaqiyatli !");
      navigate(from, { replace: true });
    } catch (err: any) {
      alert("Login xato: " + (err?.message || "Xatolik yuz berdi"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Please enter your details
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-700 font-medium"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="your username"
              onChange={onChange}
              value={form.username}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              required
              minLength={3}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-700 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              onChange={onChange}
              value={form.email}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Loading..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
