import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import SideNav from "../../layouts/dashboard";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div `
  // height: 100vh;
  // width: 100vw;
  display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-direction: column;
`;

export const DashboardLayout = ({ children }) => {
    console.log("DashboardLayout?");
    return ( <
        > < SideNav / > < Sidebar / > < />

    );
}; { /* {children} */ } { /* <Outlet /> */ }
// DashboardLayout.propTypes = {
//   second: PropTypes.third,
// };