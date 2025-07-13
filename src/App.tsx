import React, { Suspense } from "react";
import MainRote from "./pages/index";
import Loading from "./components/utilst/Loading";

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <MainRote />
      </Suspense>
    </div>
  );
};

export default React.memo(App);
