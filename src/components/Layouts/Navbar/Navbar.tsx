import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MenuOutlined, CloseOutlined, LogoutOutlined } from "@ant-design/icons";
import { useAuth } from "../../zustand/store";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, token, clearAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  };

  const navItems = [
    { path: "/", name: "Home" },
    ...(token ? [{ path: "/statistica", name: "Statistica" }] : []),
  ];

  return (
    <header className="bg-[#1e2329] border-b border-[#2d323c] shadow-md relative z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative">
        <h1 className="text-white text-xl font-bold">Logo</h1>

        <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#2ecc71] font-semibold"
                  : "text-gray-300 hover:text-white transition"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated() && (
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white transition flex items-center gap-2"
            >
              <LogoutOutlined />
              Logout
            </button>
          )}
        </div>

        <button
          className="md:hidden text-white text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1e2329] px-6 py-4 border-t border-[#2d323c]">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#2ecc71] font-semibold"
                    : "text-gray-300 hover:text-white transition"
                }
                onClick={() => setOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            {isAuthenticated() && (
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="text-gray-300 hover:text-white transition flex items-center gap-2"
              >
                <LogoutOutlined />
                Logout
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default React.memo(Navbar);
