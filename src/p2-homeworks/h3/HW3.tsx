import React, { useState } from "react";
import GreetingContainer from "./GreetingContainer";
import AlternativeGreeting from './AlternativeGreeting'
import s from "./Greeting.module.css";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

export type NewUserType = {
    _id: string;
    name: string;
    info: string;
};
// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any
  const addUserCallback = (arr: Array<UserType>) => {
    // need to fix any
    setUsers(arr); // need to fix
  };
  //////////////////////////////////////////// alternative greeting
  const [newUsers, setNewUsers] = useState<Array<NewUserType>>([]);

  const addNewUser = (arr: Array<NewUserType>) => {
    setNewUsers(arr);
  };

  return (
    <div className={s.someClass}>
      <hr />
      <h2>homeworks 3</h2>
      {/*should work (должно работать)*/}
      <GreetingContainer users={users} addUserCallback={addUserCallback} />

      <hr />
      {/*для личного творчества, могу проверить*/}
      <h2>Users Notebook</h2>
      <AlternativeGreeting users={newUsers} addUser={addNewUser} />
      <hr />
    </div>
  );
}

export default HW3;
