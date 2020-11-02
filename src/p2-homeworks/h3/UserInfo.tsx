
import React from 'react'
import classes from './Greeting.module.css';
import { NewUserType } from "./HW3";

type PropsType = {
  userInfo:  NewUserType 
  
}

const UserInfo: React.FC<PropsType> = ({ userInfo }) => {
  
    return (
      <div>
        <h4>User Info</h4>
        <div className={classes.userInfo}>
          <div className={classes.name}>Name: {userInfo.name}</div>
          <div>Info: {userInfo.info}</div>
            </div>
      </div>
    );
}
export default UserInfo