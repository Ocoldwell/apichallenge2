import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem} from "reactstrap";
import styles from "./Navigation.module.scss";
const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
    <Navbar color="faded" light className={styles.nav}>
      <NavbarBrand href="/" className="mr-auto">Game Deals</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <Link to = "/home">Home</Link>
          </NavItem>
          <NavItem>
            <Link to = "/search">Search Deals</Link>
          </NavItem>
          <NavItem>
            <Link to = "/forum">Message Board</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  );
};

export default Navigation;
