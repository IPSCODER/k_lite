import React, { memo } from 'react'
import classes from "./btn.module.css"

const Btn = (props) => {
  return (
    <>
    <button className={classes.button} type={props.type} style={props?.style} >{props.children}</button>
    </>
  )
}

export default memo(Btn)