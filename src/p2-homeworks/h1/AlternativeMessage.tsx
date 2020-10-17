import React from "react";
import { AlternativeMessageType } from "./HW1";
import classes from "./Message.module.css";

function AlternativeMessage(props: AlternativeMessageType) {
  const { avatar, name, message, time, expHandler, isExpanded } = props;
  const btnLabel = isExpanded ? "Hide" : "Expand";
  const cls = isExpanded
    ? `${classes.message__list} animate__animated animate__fadeInDown`
    : `${classes.message__list} animate__animated animate__fadeOutUp`;
  return (
    <div className={`${classes.message} ${classes.message_alternative}`}>
      <div>
        <img src={avatar}></img>
      </div>
      <div className={classes.message__baloon}>
        <h2>{name}</h2>
        <p>{message}</p>
        <span>{time}</span>
        <button onClick={expHandler}>{btnLabel}</button>
      </div>
      <ul className={cls}>
        <li>React</li>
        <li>CSS</li>
        <li>JS</li>
        <li>HTML</li>
        <li>Vue</li>
      </ul>
    </div>
  );
}

export default AlternativeMessage;
