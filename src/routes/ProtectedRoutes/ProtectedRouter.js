import React from "react";
import { Route, Redirect, Navigate, Routes, Outlet } from "react-router-dom";
import DashboardLayout from "../../pages/dashboard/DashboardLayout";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRouter = ({ children }) => {
  const { currUser } = useContext(AuthContext);
  if (currUser) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
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
