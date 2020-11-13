import React, { ChangeEvent, useState } from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";
import classes from "./alternativeHW4.module.css";
import Simon from "./common/Simon/Simon";
import Content from "./common/Content/content";
import { v1 } from "uuid";
import { loremIpsum } from "lorem-ipsum";
import { versionMajorMinor } from "typescript";


export type taskType = {
  id: string
  value: string
  isCorrect: boolean
  isChecked: boolean
}
function HW4() {
  const [text, setText] = useState<string>("");
  const error = text ? "" : "error";
  const showAlert = () => {
    if (error) {
      alert("введите текст...");
    } else {
      alert(text); // если нет ошибки показать текст
    }
  }

  const [checked, setChecked] = useState<boolean>(false);
  const testOnChange = ((e: ChangeEvent<HTMLInputElement>) => { setChecked(e.currentTarget.checked) })
  /////////////////////////////////////////////////////////////////////////////////
  const [simonSaid, setSimonSaid] = useState<string>('')
  const [isSimon, setIsSimon] = useState<boolean>(false)
  const [simonsTask, setSimonsTask] = useState<Array<taskType>>([])
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>()
  const [result, setResult] = useState<string>('')


  let reg: any = /^Саймон говорит/gi;
  function onChangeInputValue(value: string) {
    if (value.match(reg)) {
      setIsSimon(true)
    }
    else {
      setIsSimon(false)
    }
    setSimonSaid(value);
  }

  const onClearInputValue = () => {
    setSimonSaid('')
  }

  const addSimonsTask = (task: string) => {
    if (task.match(reg)) {
      let val = task.toUpperCase().replace(/Саймон говорит/i, "");
      let trimmedVal = val.trim()
      if (trimmedVal !== '') {
        const newTasks = [
          {
            id: v1(),
            value: loremIpsum().toUpperCase(),
            isCorrect: false,
            isChecked: false,
          },
          {
            id: v1(),
            value: loremIpsum().toUpperCase(),
            isCorrect: false,
            isChecked: false,
          },
          { id: v1(), value: trimmedVal, isCorrect: true, isChecked: false },
        ];
        const newArr = [...newTasks, ...simonsTask];
        setSimonsTask(() => newArr);
        setSimonSaid("");
        setIsSimon(false);
      }
      else {
        setSimonSaid(
          'Эй приятель, накарябай хоть что нибудь после "Саймон говорит".'
         
        );
         setIsSimon(true);
      }

    }
    else {
      setSimonSaid('Дружище, задание должно начинаться с фразы - Саймон говорит')
      setIsSimon(true)
      setIsCorrect(undefined);
      setResult("Дружище, задание должно начинаться с фразы - Саймон говорит");
    }
  }

  const filterTask = (id: string) => {
    const newArr: Array<taskType> = []
    simonsTask.forEach((el) => {
      if (el.id === id) {
        newArr.push(el)
      }
      if (!el.isChecked && el.id !== id) {
        newArr.push(el);
      }
    });
    setSimonsTask(() => [...newArr]);

  }

  const changeTaskStatus = (taskId: string, isDone: boolean) => {
    const task: taskType | undefined = simonsTask.find((el) => el.id === taskId)
    if (task) {
      if (task.isCorrect) {
        setIsCorrect(true)
      }
      else { setIsCorrect(false) }
      task.isChecked = isDone;
      if (!task.isChecked) {
        setIsCorrect(undefined);
      }
      setSimonsTask(() => ([...simonsTask]));
      filterTask(taskId)
      setResult(task.value)
    }
    setSimonSaid("");
  }
  return (
    <div>
      <hr />
        homeworks 4
      <div className={s.column}>
        {/*should work (должно работать)*/}
        <SuperInputText
          value={text}
          onChangeText={setText}
          onEnter={showAlert}
          error={error}
        // className={s.blue} // проверьте, рабоет ли смешивание классов
        />

        {/*should work (должно работать)*/}
        <SuperButton
          red // пропсу с булевым значением не обязательно указывать true
          onClick={showAlert}
        >
          delete {/*// название кнопки попадёт в children*/}
        </SuperButton>

        {/*should work (должно работать)*/}
        <SuperCheckbox checked={checked} onChangeChecked={setChecked}>
          some text {/*// этот текст попадёт в children*/}
        </SuperCheckbox>

        {/*// onChange тоже должен работать*/}
        <SuperCheckbox
          checked={checked}
          onChange={testOnChange}
          onChangeChecked={setChecked}
        />
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      <div className={classes.common}>
        <h2> Делай то что сказал Саймон</h2>
        <div className={classes.wrapper}>
          <Content
            simonSaid={simonSaid}
            onTextEnter={onChangeInputValue}
            onClear={onClearInputValue}
            onAddTask={() => addSimonsTask(simonSaid)}
            tasks={simonsTask}
            changeTaskStatus={changeTaskStatus}
          />
          <Simon
            simonSaid={simonSaid}
            isSimon={isSimon}
            isCorrect={isCorrect}
            result={result}
          />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default HW4;
// str.replace(/г\.[\s\S]*/g, '')