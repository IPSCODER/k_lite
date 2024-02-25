import React, { memo } from 'react';
import classes from "./input.module.css"

const Input = (props) => {
  return (
    <>
    <div className={classes.input} >
    <input type={props?.type} value={props?.value} onChange={props?.onChange} name={props?.name}  />
    <label htmlFor={props?.label}>{props?.label}</label>
    </div>
    </>
  )
}

export default memo(Input)