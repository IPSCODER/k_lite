import axios from "axios";
import * as types from "./actionType.js"


export const getData = (data) => ({
    type:types.GET_DATA,
    payload:data
})

export const createData = () => ({
    type:types.CREATE_DATA,
})

export const deleteData = () => ({
    type:types.DELETE_DATA_ONE,
})

export const updateData = () => ({
    type:types.UPDATE_DATA_ONE,
})

export const search = (data) => ({
    type:types.SEARCH,
    payload:data
})

export const comfirmBtn = (data) => ({
    type:types.CONFIRM_BTN,
    payload:data
})


// load function

export const loadSearch = (i) =>{
    return function(dispatch){
        dispatch(search(i))
    }
}

export const loadComfirm = (i) =>{
    return function(dispatch){
        dispatch(comfirmBtn(i))
    }
}


export const loadGetData = () =>{
    return function(dispatch){
        axios.post("http://localhost:9000/todo/get",{username:localStorage.getItem("name")}).then((resp)=>{
      dispatch(getData(resp.data))
      // console.log(resp);
    }).catch((err)=>{
      console.log(err);
    })
    }
}

export const loadCreateData = ({title,description,date}) =>{
    console.log("clicked");
    return function(dispatch){
        axios.post("http://localhost:9000/todo/create",{title,description,date,username:localStorage.getItem("name")}).then((resp)=>{
            console.log(resp);
      dispatch(createData())
      dispatch(loadGetData())
      // console.log(resp);
    }).catch((err)=>{
      console.log(err);
    })
    }
}

export const loadDeleteData = ({_id}) =>{
    console.log("clicked");
    return function(dispatch){
        axios.post("http://localhost:9000/todo/delete",{_id,username:localStorage.getItem("name")}).then((resp)=>{
            console.log(resp);
      dispatch(deleteData())
      dispatch(loadGetData())
      // console.log(resp);
    }).catch((err)=>{
      console.log(err);
    })
    }
}

export const loadUpdateData = ({_id,title,description}) =>{
    console.log("clicked");
    console.log(title,description);
    return function(dispatch){
        axios.post(`http://localhost:9000/todo/id`,{_id,title,description,username:localStorage.getItem("name")}).then((resp)=>{
      dispatch(updateData())
      dispatch(loadGetData())
    }).catch((err)=>{
      console.log(err);
    })
    }
}

