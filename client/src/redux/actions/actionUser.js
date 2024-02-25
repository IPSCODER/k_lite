import axios from "axios";
import * as types from "./actionType.js";



export const signin = () =>({
    type:types.SIGNIN
})

export const signup = () =>({
    type:types.SIGNUP
})

export const salert = (data) =>({
    type:types.ALERT,
    payload:data
})

export const loginInfo = (data) =>({
    type:types.LOGIN_INFO,
    payload:data
})

// dispatch function

export const loginInfos = (data) =>{
    return function(dispatch){
        dispatch(loginInfo(data))
    }
}

export const loadSignIn = ({username,password}) =>{
    return function(dispatch){
         axios.post("http://localhost:9000/user/signin",{username,password}).then((resp)=>{   
             console.log(resp.data);
             {typeof(resp.data) == 'string' && dispatch(salert(resp.data)) }
             if (resp.data.result === true) {
                localStorage.setItem("name",username)
                dispatch(loginInfo(true))
                 dispatch(signin())
                }
        }).catch((err) =>{
            console.log(err)
        })
    }
}


export const loadSignUp = ({username,password}) =>{
    return function(dispatch){
         axios.post("http://localhost:9000/user/signup",{username,password}).then((resp)=>{    
            console.log(resp.data);
            {typeof(resp.data) == 'string' && dispatch(salert(resp.data)) }
            if (resp.data.result === true) {
                dispatch(signin())
                localStorage.setItem("name",username)
                dispatch(loginInfo(true))
            }

    }).catch((err) =>{
        console.log(err)
    })
    }
}