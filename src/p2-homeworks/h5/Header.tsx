import classes from "./Header.module.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function Header() {
const[nav, setNav]=useState<boolean>(false)
    const navigation = [
      { to: "/pre-junior", name: "PreJunior"},
      { to: "/junior", name: "Junior"},
      { to: "/junior-plus", name: "Junior Plus"},
    ];
  
    const renderNavLinks = navigation.map((link, i) => {
      return (
        <li className={classes.NavItem} key={i + link.to}>
          <NavLink
            to={link.to}
           
            activeClassName={classes.active}
          >
            {link.name}
          </NavLink>
        </li>
      );
    });
  
  let cls = `${classes.Navigation} animate__animated  animate__slideInRight`;
  useEffect(() => {
    let timeout = setTimeout(() => {
      setNav(true)
    }, 700)
    return ()=> clearTimeout(timeout)
  }, [])
  

    return (
      <div className={classes.Header}>
        {nav && (
          <nav className={cls}>
            <ul className={classes.NavLinks}>{renderNavLinks}</ul>
          </nav>
        )}
      </div>
    );
}

export default Header;
