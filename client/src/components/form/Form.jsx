import React, { memo } from 'react'
import classes from "./form.module.css"
import { Link } from 'react-router-dom'
import Btn from '../btn/Btn'
import { useSelector } from 'react-redux'
const Form = (props) => {

  const alert = useSelector(state => state.userReducer.salert)


  return (
    <>
    <div className={classes.container} >
            <form onSubmit={props.submitHandler} style={{borderColor: alert && "red"}} >
                <h1>{props.heading}</h1>
                <input type="text" placeholder="Username" name='username' style={{borderColor: alert && "red"}} value={props.data.username} onChange={props.changeHandler} />
                <input type="password" placeholder="Password" name='password' style={{borderColor: alert && "red"}} value={props.data.password} onChange={props.changeHandler} />
                <Btn type="submit" >
                  Submit
                </Btn>
                <Link to={props.head_url} >{props.another_link}</Link>
            </form>
        </div>
    </>
  )
}

export default memo(Form)