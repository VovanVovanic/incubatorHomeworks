import React, { useState } from "react";
import { v1 } from "uuid";
import { NewUserType } from './HW3'
import NewGreeting from './NewGreeting'
import UserInfo from "./UserInfo";
import UsersList from "./UsersList";
import { loremIpsum } from "lorem-ipsum";
import s from "./Greeting.module.css";

type PropsType = {
  users: Array<NewUserType>;
  addUser: (arr: Array<NewUserType>)=> void
};

function AlternativeGreeting({ users, addUser }: PropsType) {
    const [name, setName] = useState<string>('')

    const [userInfo, setUserInfo] = useState<NewUserType>({} as NewUserType);

    const onUserInfo = (_id: string) => {
        const info = users.find((el) => el._id === _id);
        info && setUserInfo({ ...info });
    };


    const onUserAdded = () => {
        let trimmedName = name.trim();
        if (trimmedName === "") {
            alert("The name must not be empty");
        } else {
            const newUserDates = { _id: v1(), name, info: loremIpsum() };
            users.push(newUserDates);
            addUser([...users]);
            setName("");
        }

    }
    const onNameAdded = (name: string) => {
        setName(name);
        setUserInfo({} as NewUserType)
    }

    const onUsers = (<div className={s.listWrapper}>
        <UsersList users={users} onUserInfo={onUserInfo}/>
        <UserInfo userInfo={userInfo}/> 
        </div>)

    return (
        <div>
        {users.length !== 0 ? onUsers : null}

        <NewGreeting
          onNameAdded={onNameAdded}
          onUserAdded={onUserAdded}
          name={name}
        />
      </div>
    );
}

export default AlternativeGreeting;
