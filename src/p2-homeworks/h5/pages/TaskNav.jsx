import classes from './taskNav.module.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

const TaskNav = () => {


  const navList = [
    { to: "/pre-junior", name: "Main page", exact: true },
    { to: "/pre-junior/hw1", name: "Task 1", exact: false },
    { to: "/pre-junior/hw2", name: "Task 2", exact: false },
    { to: "/pre-junior/hw3", name: "Task 3", exact: false },
    { to: "/pre-junior/hw4", name: "Task 4", exact: false },
    { to: "/pre-junior/hw6", name: "Task 6", exact: false }
  ];

  const links = navList.map((link, i) => {
    return (
      <li className={classes.ListItem}
        key={link.name + i}>
        <NavLink
          to={link.to}
          exact={link.exact}
          activeClassName={classes.active}
        >
          {link.name}
      </NavLink></li>
    )
  })
  return (
    <nav className={classes.navWrapper}>
      <ul className={classes.navList}>{links}</ul>
    </nav>
  );
}
export default TaskNav