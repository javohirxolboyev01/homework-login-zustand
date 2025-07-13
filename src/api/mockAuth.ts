export const mockAuthService = {
  login: async (username: string, email: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!username || !email) {
      throw new Error("Username va email to'ldirilishi shart");
    }

    if (username.length < 3) {
      throw new Error("Username kamida 3 ta belgi bo'lishi kerak");
    }

    if (!email.includes("@")) {
      throw new Error("To'g'ri email kiriting");
    }

    return {
      data: {
        accessToken: `mock_access_token_${Date.now()}_${username}`,
        refreshToken: `mock_refresh_token_${Date.now()}_${username}`,
        user: {
          id: 1,
          username,
          email,
          name: username,
        },
      },
    };
  },

  logout: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true };
  },
};
