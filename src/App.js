// import Router from "./routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Route, Router, Switch } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
import SideNav from "./layouts/dashboard";
import styled from "styled-components";
import { Login } from "./pages/auth/Login/Login";
import { Register } from "./pages/auth/Register/Register";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRouter from "./routes/ProtectedRoutes/ProtectedRouter";
import { DashboardLayout } from "./pages/dashboard/DashboardLayout";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-direction: column;
`;

function App() {
  console.log("App?");
  return (
    // <Router>
    <Wrapper>
        <DashboardLayout />

      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Chat />} />
          {/* <Route exact path="/" element={<ProtectedRouter component={Chat}/>}>
          </Route>
          <Route path="/contacts/:contactId" element={<ProtectedRouter isLoggedIn={true}> <Chat /> </ProtectedRouter>}>
          </Route> */}
          <Route path="/contacts/:contactId" element={<Chat />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          {/* <Route path="/*" element={<PageNotFound />}></Route> */}
        </Routes>
      {/* </Router> */}
    </Wrapper>
    // </Router>
  );
}

export default App;
