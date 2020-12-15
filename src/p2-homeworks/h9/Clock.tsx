import classes from "./clocks.module.css";
import React, { useEffect, useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import moment from "moment";

function Clock() {
    
    const [time, setTime] = useState<string>('');
    const[timeId, setTimeId] = useState<number>()
    const [date, setDate] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const [started, setStarted] = useState<boolean>(true);
    console.log(timeId);
    
  useEffect(() => {
  start()
},[])
    
  const start = () => {
      setStarted(true)
        let interval = window.setInterval(() => {
            let time = moment().format("h:mm:ss a");
            setTime(time);
        }, 100)
       setTimeId(interval)
    }
    const stop = () => {
      clearInterval(timeId)
      setStarted(false)
        
    }

    const onMouseEnter = () => {
        setShow(true)
        let newDate = moment().format("MMMM Do YYYY");
        setDate(newDate)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const stringTime = time; // fix with date
    const stringDate = date; // fix with date

    return (
      <div style={{marginBottom:'50px'}}>
        <div
          className={classes.ClocksDisplay}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {stringTime}
          {show && <div className={classes.Date}>{stringDate}</div>}
        </div>
        <div className={classes.ButtonWrapper}>
          <SuperButton
            disabled={started}
            className={classes.Button}
            onClick={start}
          >start</SuperButton>
          <SuperButton className = {classes.Button}onClick={stop}>stop</SuperButton>
        </div>
      </div>
    );
}

export default Clock;
