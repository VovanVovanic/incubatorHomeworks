import classes from "./hw9.module.css";
import React from "react";
import Clock from "./Clock";
import AlternativeClock from "./alternativeClocks/AlternativeClock";

function HW9() {
    return (
        <div className={classes.HW9Wrapper}>
            <hr/>
            <h1>Homework 9</h1>

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <h2>My clocks</h2>
            <AlternativeClock/>
            <hr/>
        </div>
    );
}

export default HW9;
