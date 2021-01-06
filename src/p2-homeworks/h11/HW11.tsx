import classes from "./HW11Wrapper.module.css";
import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);
let disabled = value1 >= value2
    const valueHandler = (val: number) => {
        let newValue = 100 - value1
        setValue1(val)
        // setValue2(newValue)
    }
    const doubleValueHandler = (val: number[]) => {
        let val1 = val[0]
        let val2 = val[1];
        if (val1 >= val2) {
          return;
        } 
        setValue1(val1);
        setValue2(val2);
         
    }
    return (
      <div className={classes.HW11Wrapper}>
        {/*should work (должно работать)*/}
        <div className={classes.SliderWrapper}>
          <span className={classes.SliderInfo}>Initial Value: {value1}</span>
          <SuperRange
            // сделать так чтоб value1 изменялось
            onChangeRange={valueHandler}
                    value={value1}
                   
          />
        </div>
        <div className={classes.SliderWrapper}>
          <span className={classes.SliderInfo}>Initial Value: {value1}</span>
          <SuperDoubleRange
            // сделать так чтоб value1 и value2 изменялось
            value={[value1, value2]}
                    onChangeRange={doubleValueHandler}
                    disabled={disabled}
          />
          <span className={classes.SliderInfo}>Final Value: {value2}</span>
        </div>
        {/*для личного творчества, могу проверить*/}
        {/*<AlternativeSuperRange/>*/}
        {/*<AlternativeSuperDoubleRange/>*/}
      </div>
    );
}

export default HW11;
