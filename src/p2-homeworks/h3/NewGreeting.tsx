import React, {ChangeEvent} from 'react'
import s from "./Greeting.module.css";


type PropsType = {
    onNameAdded: (name: string) => void
    onUserAdded: () => void
    name: string
}
const NewGreeting: React.FC<PropsType> = ({ onNameAdded, onUserAdded, name }) => {
    const onInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
         onNameAdded(e.currentTarget.value)
    }
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onUserAdded();
    };
    return (
        <form
            className={s.wrapper}
            onSubmit ={onSubmitHandler}
        >
            <input
                placeholder="Type your name here"
                onChange={onInputHandler}
                value={name}
            ></input>
          <button >ADD NEW USER</button>
        </form>
    );
}
export default NewGreeting