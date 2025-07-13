import React from "react";
import { Spin } from "antd";
const Loading = () => {
  return (
    <div>
      <div className="w-full h-screen grid place-items-center ">
        <div className="flex flex-col items-center">
          {/* <img src={Logo} width={80} alt="Loading..." /> */}
          <Spin style={{color:"gray"}} size="large" />
          <p className="text-gray-700  text-sm mt-2 ml-3">Yuklanmoqda...</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Loading);
