import classes from "./alternativeClock.module.css";
import React, { useEffect } from "react";
import { useState } from "react";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import moment from "moment";
let m = require("moment-timezone");

function AlternativeClock() {
    const [time, setTime] = useState<string>();
    const [timeId, setTimeId] = useState<number>();
    const [date, setDate] = useState<string>();
    const [timeZoneName, setTimeZoneName] = useState<string>("Europe/London");
    const[started, setStarted] = useState<boolean>(true)
    console.log(m.tz.names());

    const getTime = (timeZone: string) => {
        let newTime = m().tz(timeZone).format("h:mm:ss a");
        setTime(newTime)
    };

    const getDate = (timeZone: string) => {
        let newDate = m().tz(timeZone).format("MMMM Do YYYY");
        setDate(newDate);
    };

    const startClocks = (tz: string) => {
        setStarted(true)
        let interval = window.setInterval(() => {
            getTime(tz)
            getDate(tz)
        }, 100)
        setTimeId(interval);
    }
    const stop = () => {
        clearInterval(timeId);
        setStarted(false)
    };

    useEffect(() => {
        startClocks("Europe/London");
    }, []);

    const btnHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let zone = e.currentTarget.dataset.zone
        zone && setTimeZoneName(zone);
        stop()
        zone && startClocks(zone)
    };
    const citiesBtns = [
        { name: "London", timeZone: "Europe/London" },
        { name: "Moscow", timeZone: "Europe/Moscow" },
        { name: "Toronto", timeZone: "America/Toronto" },
        { name: "Bangkok", timeZone: "Asia/Bangkok" },
    ].map((btn) => {
        let active = timeZoneName === btn.timeZone && classes.ActiveBtnCity;
        return (
            <SuperButton
                name={btn.name}
                key={btn.name}
                className={classes.AlternativeButtonCities + " " + active}
                data-zone={btn.timeZone}
                onClick={btnHandler}
            >
                {btn.name}
            </SuperButton>
        );
    });

    const stringTime = time;
    const stringDate = date;
    return (
        <div>
            <div className={classes.AlternativeButtonWrapper}>
                {citiesBtns}
            </div>
            <div className={classes.AlternativeClocksDisplay}>
                {stringTime}
                <div className={classes.AlternativeDate}>{stringDate}</div>
            </div>
            <div className={classes.AlternativeButtonWrapper}>
                <SuperButton
                    disabled={started}
                    className={classes.AlternativeButton}
                    onClick={() => startClocks(timeZoneName)}>
                    start</SuperButton>
                <SuperButton
                    className={classes.AlternativeButton}
                    onClick={stop}
                >stop</SuperButton>
            </div>
        </div>
    );
}

export default AlternativeClock;
