import React from "react";
import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <Spin size="large" style={{ color: "white" }} />
        <p className="text-white text-base mt-4 tracking-widest font-semibold uppercase text-center">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default React.memo(Loading);
