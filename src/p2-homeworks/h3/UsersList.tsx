import React from 'react'
import s from "./Greeting.module.css";
import { NewUserType } from "./HW3";

type PropType = {
    users: Array<NewUserType>
    onUserInfo: (_id: string)=> void
}
const UsersList: React.FC<PropType> = ({ users, onUserInfo }) => {
    const userNames = users.map(({ name, _id }) => {
        return (
          <li key={_id}>
            <button onClick={()=>onUserInfo(_id)}>{name}</button>
          </li>
        );
    })
    return (
      <div>
        <h4> Users List</h4>
        <ul>
             {userNames}   
        </ul>
      </div>
    );
}
export default UsersList