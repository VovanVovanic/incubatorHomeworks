import classes from "./taskNav.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const TaskNavJunPlus = () => {
  const navList = [
    { to: "/junior-plus", name: "Main page", exact: true },
    { to: "/junior-plus/hw13", name: "Task 13", exact: false },

  ];

  const links = navList.map((link, i) => {
    return (
      <li className={classes.ListItem} key={link.name + i}>
        <NavLink
          to={link.to}
          exact={link.exact}
          activeClassName={classes.active}
        >
          {link.name}
        </NavLink>
      </li>
    );
  });
  return (
    <nav className={classes.navWrapper}>
      <ul className={classes.navList}>{links}</ul>
    </nav>
  );
};
export default TaskNavJunPlus;
