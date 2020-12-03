import classes from "./HW7.module.css";
import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import AlternativeSuperSelect from "./common/c5-SuperSelect/AlternativeSuperSelect";


const arr = ["x", "y", "z"];
const radioArr = [{ name: 'x', checked: false }, { name: 'y', checked: false }, { name: 'z', checked: false }]
const ownSelectDates = [{value: 'Riga', isChosen: false}, {value: 'Moscow', isChosen: false}, {value: 'Minsk', isChosen: false}, {value: 'Tallinn', isChosen: false}]

export interface IRadio{
    name?: string
    value?: string
    checked?: boolean
    isChosen?: boolean
}
function HW7() {
    const [value, onChangeOption] = useState(arr[1]);
    const [radioOpt, setRadioOpt] = useState<Array<IRadio>>(radioArr)
    ////////////// my own staff
  const [ownSelects, setOwnSelects] = useState<Array<IRadio>>(ownSelectDates);
  const [name, setName] = useState<string>('Please Select your city')
  


  const onOptionChoice = (newName: string) => {
    const chosenCity = ownSelects.map((el) => {
      if (el.value === newName) {
        return{...el, isChosen:true}
      }
      else {
        return{...el, isChosen:false}
      }
    })
    setOwnSelects(chosenCity)
    setName(newName)
    
  }
    const onChangeRadio = (value: string) => {
        let checkedRadio = radioOpt.map((el) => {
            if (el.name === value) {
                return{...el, checked: true}
            }
            else  return {...el, checked: false}
        })
        setRadioOpt(checkedRadio)
        
    }
    return (
      <div className={classes.HW7Wrapper} >
        <h2>homeworks 7</h2>
        {/*should work (должно работать)*/}
        <div className={classes.ItemWrapper}>
          <SuperSelect
            options={arr}
            value={value}
            onChangeOption={onChangeOption}
          />
        </div>
        <div className={classes.ItemWrapper}>
          <SuperRadio
            name={"radio"}
            options={radioOpt}
            onChangeOption={onChangeRadio}
          />
        </div>

        <hr />
        {/*для личного творчества, могу проверить*/}
        <h4> My own selects</h4>
        <div className={classes.OwnItemWrapper}>
          <AlternativeSuperSelect
            list={ownSelects}
            onOptionChoice={onOptionChoice}
            name={name}
          />
        </div>
        {/*<AlternativeSuperRadio/>*/}
        <hr />
      </div>
    );
}

export default HW7;
