import classes from './HW13.module.css';
import React from 'react'
import Request, { CheckType } from "./Request";
import { putNewRequest } from './requestReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from '../h10/bll/store';


const HW13 = () => {
  const dispatch = useDispatch()
  let msg = useSelector<AppStoreType, string>((state) => state.request.message);
  let err = useSelector<AppStoreType, boolean>((state) => state.request.error);

  
  const onSubmitData = (values: CheckType) => {
   dispatch(putNewRequest(values.rememberMe))
  };
  let isErr = err && classes.error
  return (
    <div className={classes.HW13Wrapper}>
      <h2>Homework 13</h2>
      <Request onSubmit={onSubmitData} />
      <div className={classes.Msg + ' ' + isErr}>{msg}</div>
    </div>
  );
}
export default HW13