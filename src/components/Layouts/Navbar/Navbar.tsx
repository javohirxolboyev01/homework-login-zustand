import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MenuOutlined, CloseOutlined, LogoutOutlined } from "@ant-design/icons";
import { useStore } from "../../zustand/store";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { token, clearAuth } = useStore();
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
    <header className="bg-black border-b border-gray-800 shadow-md relative z-50">
      <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-extrabold tracking-widest uppercase">
          Logo
        </h1>
        <nav className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-bold underline"
                  : "text-white hover:text-red-600 transition font-semibold"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          {token && (
            <button
              onClick={handleLogout}
              className="text-white hover:text-red-600 transition flex items-center gap-2 font-semibold"
            >
              <LogoutOutlined />
              Logout
            </button>
          )}
        </div>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black px-6 py-4 border-t border-gray-800">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 font-bold underline"
                    : "text-white hover:text-red-600 transition font-semibold"
                }
                onClick={() => setOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            {token && (
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="text-white hover:text-red-600 transition flex items-center gap-2 font-semibold"
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
