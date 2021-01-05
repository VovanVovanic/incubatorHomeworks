import classes from './HW10Wrapper.module.css'
import React from 'react'
import deers from './821(2).gif'
const Spinner = () => {
  return (
    <div className={classes.Spinner}>
      <img src = {deers} alt ='deers' />
    </div>
  )
}
export default Spinner