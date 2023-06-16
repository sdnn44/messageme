import React from "react";
import { Route, Redirect, Navigate, Routes, Outlet } from "react-router-dom";
import { DashboardLayout } from "../../pages/dashboard/DashboardLayout";
// import { authProvider } from '../../services/firebase'

const ProtectedRouter = ({ isLoggedIn, children, ...rest }) => {
  //   const getAuth = authProvider;
  console.log("ProtectedRouter?");
  const isAuthenticated = true;
  return ( <h1>p</h1>
    //<Routes>
    //  <Route
    //    {...rest}
    //    element={<DashboardLayout />
    //   isAuthenticated ? (
    //     <DashboardLayout>
    //       <Component />
    //     </DashboardLayout>
    //   ) : (
    //     <Navigate to="/login" replace />
    //   )
    //   }
    // />
    //</Routes>
    // <DashboardLayout><Component/></DashboardLayout>

    // <Routes>
    //   <Route
    //     {...rest}
    //     render={(props) => {
    //       return (
    //         <>
    //           <DashboardLayout>{children}</DashboardLayout>
    //           <Outlet />
    //         </>
    //       );
    //     }}
    //   ></Route>
    // </Routes>

    
  );
  // <Routes>
  //   <Route
  //     {...rest}
  //     element={
  //       isAuthenticated ? (
  //         <DashboardLayout>
  //           {children}
  //         </DashboardLayout>
  //       ) : (
  //         <Navigate to="/login" replace />
  //       )
  //     }
  //   />
  // </Routes>
  //   );
};
//       render={(props) => {
//         return(
//         <DashboardLayout>
//           <Component {...props} />
//         </DashboardLayout>
//         );
//       }}
//     />
//   );
// };

export default ProtectedRouter;
