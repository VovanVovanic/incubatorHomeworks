import React from 'react'
import { taskType } from '../../HW4';
import AlternativeSuperInputText from '../c1-SuperInputText/AlternativeSuperInputText'
import AlternativeSuperButton from '../c2-SuperButton/AlternativeSuperButton'
import TaskList from '../taskList/tasList';
import classes from './Content.module.css'


type ContentPropsType = {
  simonSaid: string;
  onTextEnter: (value: string) => void;
  onClear: (value: string) => void;
  onAddTask: () => void;
  tasks: Array<taskType>;
  changeTaskStatus: (taskId: string, isDone: boolean)=>void
};
const Content: React.FC<ContentPropsType> = ({ simonSaid, onTextEnter, onAddTask, tasks, changeTaskStatus }) => {
  const onClearHandler = () => {
    onTextEnter('')
  }
  const onAddHandler = () => {
  onAddTask()
}
  return (
    <div className={classes.Content}>
      <div className={classes.inputWrapper}>
        <AlternativeSuperInputText
          simonSaid={simonSaid}
          onTextEnter={onTextEnter}
          onAddTask={onAddTask}
        />
        <div className={classes.buttonWrapper}>
          <AlternativeSuperButton
            onButtonAction={onAddHandler}
            label="Сохранить то что сказал Саймон"
          />
          <AlternativeSuperButton
            onButtonAction={onClearHandler}
            label="Удалить то что сказал Саймон"
          />
        </div>
      </div>
      <TaskList tasks={tasks} changeTaskStatus={changeTaskStatus} />
    </div>
  );
}
export default Content