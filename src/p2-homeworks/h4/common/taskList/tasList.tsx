import React from 'react'
import { taskType } from '../../HW4';
import TaskItem from '../taskItem/taskItem';
import classes from './taskList.module.css'


type TaskListType = {
  tasks: Array<taskType>;
  changeTaskStatus: (taskId: string, isDone: boolean) => void;
};
const TaskList: React.FC<TaskListType> = ({ tasks, changeTaskStatus }) => {
  const listOfTasks = tasks.map((el) => {
    return (
      <TaskItem
        key={el.id}
        task={el.value}
        isChecked={el.isChecked}
        changeTaskStatus={changeTaskStatus}
        id={el.id}
      />
    );
    
  })
  return (
    <ul className={classes.taskList}>
      {listOfTasks}
    </ul>
  );
}

export default TaskList