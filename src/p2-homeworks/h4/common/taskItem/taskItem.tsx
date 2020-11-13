import React, { ChangeEvent } from 'react'
import classes from './taskItem.module.css'


type TaskPropsType = {
  id:string
  task: string;
  isChecked: boolean;
  changeTaskStatus: (taskId: string, isDone: boolean) => void;
};
const TaskItem: React.FC<TaskPropsType> = ({ task, isChecked, changeTaskStatus, id }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeTaskStatus(id, e.currentTarget.checked)
  };

  return (
    <li className={classes.taskItem}>
      <label>
        <input
          type={"checkbox"}
          className={classes.checkbox}
          checked={isChecked}
          onChange ={onChangeHandler}
        />
        <span >{task}</span>
      </label>
    </li>
  );
}
export default TaskItem