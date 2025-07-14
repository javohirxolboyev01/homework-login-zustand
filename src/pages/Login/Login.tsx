import React, { useState } from "react";
import { useAuth } from "../../api/hooks/useAuth";
import { useStore } from "../../components/zustand/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { getAuth } = useAuth();
  const { setToken, setRefreshToken } = useStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await getAuth({ username, password });
      console.log("API dan  res:", res);
      setToken(res.accessToken);
      setRefreshToken(res.refreshToken);
      navigate("/");
    } catch (e: any) {
      setError(
        "Kirish muvaffaqiyatsiz yakunlandi. Iltimos, ma'lumotlaringizni tekshiring."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <div className="container max-w-md mx-auto px-4">
        <div className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-200">
          <h2 className="text-3xl font-extrabold text-center text-black mb-8 tracking-tight uppercase">
            Sign in to your account
          </h2>
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label
                htmlFor="username"
                className="block text-xs font-semibold text-gray-700 uppercase tracking-widest"
              >
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                type="text"
                required
                className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-gray-700 uppercase tracking-widest"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                required
                className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-black hover:bg-gray-900 text-white font-bold rounded-lg transition uppercase tracking-widest disabled:bg-gray-400"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Login);
