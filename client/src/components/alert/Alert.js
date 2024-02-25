import React, { memo, useEffect } from 'react'
import classes from "./alert.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { salert } from '../../redux/actions/actionUser'

const Alert = (props) => {

  const dispatch = useDispatch()

  const sal = useSelector(state => state.userReducer.salert)

    useEffect(()=>{
        var x = setTimeout(()=>{
            dispatch(salert(''))
        },3000)

        return () =>{
            clearTimeout(x)
        }
    },[sal])


  return (
    <>
    {sal && 
    <div className={classes.alert} >{props.children}</div>}
    </>
  )
}

export default memo(Alert)