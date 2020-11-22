import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import classes from "./hw6.module.css";
import AlternativeSuperEditableSpan from "./common/c4-SuperEditableSpan/AlternativeSuperEditableSpan";

function HW6() {
  const [value, setValue] = useState<string>("");

  /////////////////////////////////////////////
  const [mode, setMode] = useState<boolean>(false);
  const[newSpanValue, setNewSpanValue]=useState<string>('new dfdfdfvalue')
  
  let isEdit = mode ? 'Apply' : 'Edit'
  const saveNewSpan = () => {
    saveState<string>("new-span-value", newSpanValue);
    setMode(false)
  }

  const restoreNewSpan = () => {
    const newValue = restoreState("new-span-value", value);
    setNewSpanValue(newValue)
    setMode(false)
    
  }
  const editNewSpan = () => {
    setMode(!mode)
  }

    const save = () => {
      saveState<string>("editable-span-value", value);
    };

  const restore = () => {
    const newValue = restoreState("editable-span-value", value);
       setValue(newValue);
    };
  const changeValue = (value: string) => {
    setNewSpanValue(value)
  }
  return (
    <div className={classes.hw6Wrapper}>
      <h1>Task 6</h1>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <SuperEditableSpan
            value={value}
            onChangeText={setValue}
            spanProps={{ children: value ? undefined : "enter text..." }}
          />
          <div className={classes.btnWrapper}>
            <SuperButton className="btn btn-primary" onClick={save}>
              save
            </SuperButton>
            <SuperButton className="btn btn-danger" onClick={restore}>
              restore
            </SuperButton>
          </div>
        </li>

        {/*для личного творчества, могу проверить*/}
        <li className="list-group-item">
          <AlternativeSuperEditableSpan
            mode={mode}
            value={newSpanValue}
            changeValue={changeValue}
            changeMode={editNewSpan}
          />
          <div className={classes.btnWrapper}>
            <SuperButton className="btn btn-primary" onClick={saveNewSpan}>
              save
            </SuperButton>
            <SuperButton className="btn btn-success" onClick={editNewSpan}>
              {isEdit}
            </SuperButton>
            <SuperButton className="btn btn-danger" onClick={restoreNewSpan}>
              restore prev
            </SuperButton>
          </div>
        </li>

        <hr />
      </ul>
    </div>
  );
}

export default HW6;
