import React from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Layouts/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default React.memo(Layout);
