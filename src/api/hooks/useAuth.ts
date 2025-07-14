import axios from "axios";

export const useAuth = () => {
  const getAuth = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const res = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
    });
    return res.data;
  };

  const refreshAuth = async (refreshToken: string) => {
    const res = await axios.post("https://dummyjson.com/auth/refresh", {
      refreshToken,
    });
    return res.data;
  };

  return { getAuth, refreshAuth };
};
