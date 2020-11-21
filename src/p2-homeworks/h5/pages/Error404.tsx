import classes from "./Error.module.css";
import React from "react";

function Error404() {
    return (
        <div className={classes.Error}>
            
            <div className={classes.ErrorMessage}>404 Page not found!</div>
            
        </div>
    );
}

export default Error404;
