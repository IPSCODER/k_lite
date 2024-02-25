import React, { memo, useContext, useState } from 'react'
import classes from "./register.module.css"
import Form from '../../components/form/Form'
import { ContextProvider } from '../../App'
import Alert from '../../components/alert/Alert';
import { useDispatch } from 'react-redux';
import { loadSignUp } from '../../redux/actions/actionUser';

const Register = () => {

    const dispatch = useDispatch()

    const {setLogin,alert,setAlert} = useContext(ContextProvider)

    const [registerData,setRegisterData] = useState({
        username:'',
        password:''
    })

    const changeHandler = (e) =>{
        const {name,value} = e.target;
        setRegisterData({...registerData,[name]:value})
    }

    const submitHandler = async (e) =>{
        e.preventDefault();
        if (!registerData.username == "" && !registerData.password == "" && registerData.password.length == 6 && registerData.username.length > 5 ) {
            dispatch(loadSignUp({username:registerData.username,password:registerData.password}))
        }else if (registerData.username.length < 5) {
            setAlert("Insert More Than 5 Digit Username")
        }else if (registerData.password.length !== 6) {
            setAlert("Insert 6 Digit Password")
        }else{
            setAlert("Insert Username and Password")
        }
        
    }


  return (
    <section className={classes.register} >
        <Form heading={"Sign Up"} head_url="/" another_link="Sign In" data={registerData} changeHandler={changeHandler} submitHandler={submitHandler} />
        <Alert>
            {alert}
        </Alert>
    </section>
  )
}

export default memo(Register)