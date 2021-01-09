import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { changeThemeC, toggleAdditionalThemes } from "./bll/themeReducer";
import s from "./HW12.module.css";



function HW12() {
    const theme = useSelector<AppStoreType, string>((state) => state.theme.clr); // useSelector
    const themes = useSelector<AppStoreType, Array<string>>((state) => state.theme.themes)
    const btns = useSelector<AppStoreType, Array<{name:string, state:boolean}>>((state)=>state.theme.btns)
  const dispatch = useDispatch()
  
    const onChangeOptionHandler = (clr: string) => {
        dispatch(changeThemeC(clr));
    }
    const themesHandler = (name: string, state: boolean) => {
        dispatch(toggleAdditionalThemes(name, state));
    }
    // useDispatch, onChangeCallback

    const buttons = btns.map((el) => {
        let isAdded = el.state ? 'Add' : 'Remove'
        return (
            <SuperButton
                key={el.name}
                onClick={()=>themesHandler(el.name, el.state)}
            >{`${isAdded} ${el.name}`}</SuperButton>
        )
    })
    return (
      <div className={s[theme] + " " + s.common}>
        <span className={s[theme + "-text"]}>Homework 12 </span>
        {/*should work (должно работать)*/}
        {/*SuperSelect or SuperRadio*/}
        <div className={s.controls}>
          <SuperSelect
            options={themes}
            onChangeOption={onChangeOptionHandler}
          />
          <div>{buttons}</div>
        </div>
      </div>
    );
}

export default HW12;
