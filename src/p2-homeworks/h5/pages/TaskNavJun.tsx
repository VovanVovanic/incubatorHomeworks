import classes from "./taskNav.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const TaskNavJun = () => {
  const navList = [
    { to: "/junior", name: "Main page", exact: true },
    { to: "/junior/hw7", name: "Task 7", exact: false },
    { to: "/junior/hw8", name: "Task 8", exact: false },
    { to: "/junior/hw9", name: "Task 9", exact: false },
    { to: "/junior/hw10", name: "Task 10", exact: false },
    { to: "/junior/hw11", name: "Task 11", exact: false },
    { to: "/junior/hw12", name: "Task 12", exact: false },
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
export default TaskNavJun;
