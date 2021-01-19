import classes from './HW13.module.css';
import React from 'react'
import { reduxForm, InjectedFormProps, Field } from "redux-form";


export type CheckType = {
  rememberMe: boolean
}
const Request: React.FC<InjectedFormProps<CheckType>> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>
        <Field component="input" type="checkbox" name="rememberMe" />
      </div>
      <button className={classes.Button} type="submit">
        Send
      </button>
    </form>
  );
};

export default reduxForm<CheckType>({
  form: "request1",
})(Request);