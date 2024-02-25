import React, { memo,  useState } from 'react'
import classes from "./login.module.css"
import Form from '../../components/form/Form'
import Alert from '../../components/alert/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { loadSignIn, salert } from '../../redux/actions/actionUser'

const Login = () => {

    const dispatch = useDispatch()
    const sal = useSelector(state => state.userReducer.salert)

    const [loginData,setLoginData] = useState({
        username:'',
        password:''
    })

    const changeHandler = (e) =>{
        const {name,value} = e.target;
        setLoginData({...loginData,[name]:value})
    }

   
    const submitHandler = async (e) =>{
        e.preventDefault();
        if (!loginData.username == "" && !loginData.password == "") {
            dispatch(loadSignIn({username:loginData.username,password:loginData.password}))
        }else{
            dispatch(salert("Insert Username and Password"))
        }
        
    }


  return (
    <section className={classes.login} >
        <Form heading={"Sign In"} head_url="/signup" another_link="Sign Up" data={loginData} changeHandler={changeHandler} submitHandler={submitHandler} />
        <Alert>
            {sal}
        </Alert>
    </section>
  )
}

export default memo(Login)