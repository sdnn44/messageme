// import React, { Suspense, lazy } from "react";
// const Cat = lazy(() => import("../../components/Cat"));
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
const MainView = () => {
//   return (
//     <Suspense fallback="Loading...">
//       <Cat />
//     </Suspense>
//   );
return (
    <>
    <Sidebar />
    </>
  );
};

export default MainView;
