import React, { memo, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from "./header.module.css"
import { ContextProvider } from '../../App'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginInfos } from '../../redux/actions/actionUser'

const Header = () => {

  const dispatch = useDispatch()


    const logout = async () =>{
     localStorage.clear();
     window.location.reload();
     
    }

  return (
    <header className={classes.header} >
        <Link to={"/"} className={classes.logo} >Logo </Link>
        <h2 onClick={logout} >Logout</h2>
    </header>
  )
}

export default memo(Header)