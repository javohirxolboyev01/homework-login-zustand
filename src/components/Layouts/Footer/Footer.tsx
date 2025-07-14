import React from "react";

const Footer = () => (
  <footer className="bg-black text-white text-center py-6 mt-10 border-t border-gray-800">
    <div className="container mx-auto px-4">
      <span className="font-semibold tracking-widest uppercase text-xs">
        © {new Date().getFullYear()} Statistics as of Today.
      </span>
    </div>
  </footer>
);

export default React.memo(Footer);
