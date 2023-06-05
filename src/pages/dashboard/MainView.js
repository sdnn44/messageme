// import React, { Suspense, lazy } from "react";
// const Cat = lazy(() => import("../../components/Cat"));
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Stack } from "@mui/system";
const MainView = () => {
//   return (
//     <Suspense fallback="Loading...">
//       <Cat />
//     </Suspense>
//   );
return (
    <>
    {/* <Stack direction="row" sx={{ width: "100%" }}>
    <Sidebar />
    </Stack> */}
    </>
  );
};

export default MainView;
