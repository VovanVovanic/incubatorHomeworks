import React from "react";
import { MessageDateType } from "./HW1";
import classes from "./Message.module.css";


function Message(props: MessageDateType) {
  const { avatar, name, message, time } = props;
  return (
      <div className={classes.message}>
        <div>
          <img src={avatar}></img>
        </div>
        <div className={classes.message__baloon}>
          <h2>{name}</h2>
          <p>{message}</p>
          <span>{time}</span>
        </div>
      </div>
  );
}

export default Message;
