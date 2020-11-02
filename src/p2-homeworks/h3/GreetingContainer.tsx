import React, {useState} from "react";
import { v1 } from "uuid";
import Greeting from "./Greeting";
import {UserType} from './HW3'

type GreetingContainerPropsType = {
  users: Array<UserType>; // need to fix any
  addUserCallback: (arr: Array<UserType>) => void; // need to fix any
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any

    const setNameCallback = (e: string) => { // need to fix any
        setName(e); // need to fix
        setError("");
    };
    const addUser = () => {
        let isName = name.trim()
        if (isName !== "") {
          const newUser = { _id: v1(), name: isName};
          users.push(newUser);
            addUserCallback([...users]);
            setName('')
          alert(`Hello  ${name}!`); // need to fix
        }
        else {
            setError('This field must not be empty')
            return
        }

    };
    
   let totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
