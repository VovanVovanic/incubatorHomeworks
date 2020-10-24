import classes from "./Affairs.module.css";
import React from "react";
import {AffairType, DeleteType} from './HW2'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: DeleteType // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
      <div className={classes.affairItem}>
        <h3>{props.affair.name}</h3>
        <button onClick={deleteCallback}>X</button>
      </div>
    );
}

export default Affair;
