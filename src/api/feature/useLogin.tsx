import { useQuery } from "@tanstack/react-query";
import { api } from "../";

export const useProfile = () => {
  return useQuery({
    queryKey: ["login"],
    queryFn: () => {
      const token = localStorage.getItem("token");
      return api.get("/auth/login", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
};
