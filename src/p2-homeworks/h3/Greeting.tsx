import React from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: string)=> void// need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''; // need to fix with (?:)
    const isError = error ? s.errorBox : ''
    return (
      <div>
        <div className={s.wrapper}>
          <input
            value={name}
            onChange={(e) => setNameCallback(e.target.value)}
            className={inputClass}
          />
          <button onClick={addUser}>add</button>
          <span>{totalUsers} Users Added</span>
        </div>
            <span className={isError}>{error}</span>
      </div>
    );
}

export default Greeting;
