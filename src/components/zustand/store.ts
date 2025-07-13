import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string;
  refreshToken: string;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearAuth: () => void;
  isAuthenticated: () => boolean;
}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      token: "",
      refreshToken: "",
      setTokens: (token, refreshToken) => set({ token, refreshToken }),
      clearAuth: () => set({ token: "", refreshToken: "" }),
      isAuthenticated: () => !!get().token,
    }),
    { name: "bu tokken" }
  )
);
