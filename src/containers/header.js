import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "../header.css";

const Header = ({ props }) => {
  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">
          <b className="headerStyle">MSARDIC</b>
        </NavbarBrand>
      </Navbar>
      <h1 className="h1Style">Posts</h1>
    </div>
  );
};

export default Header;
