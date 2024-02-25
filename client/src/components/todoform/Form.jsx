import React, { memo, useEffect, useState } from 'react'
import Input from '../input/Input';
import Btn from '../btn/Btn';
import classes from "./form.module.css"
import { useDispatch } from 'react-redux';
import { loadCreateData, loadUpdateData } from '../../redux/actions/actionTodo';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import DatePick from '../countdown/DatePicker';

const Form = () => {

  const {id} = useParams()

  const {state} = useLocation()
  const navigate = useNavigate()
  const [date,setDate] = useState(new Date())

  const dispatch = useDispatch()

    const [data,setState] = useState({
        title:"",
        description:"",
        date:''
      })
    

      useEffect(()=>{
        if (state && id) {
          setState({...state})
          setDate(state.date)
        }else{
          setState({
            title:"",
            description:""
          })
        }
      },[state])


      const onChangehandler = (e) =>{
        const {name,value} =e.target;
        setState({...data,[name]:value})
      }
    
      const submitHandler = (e) =>{
        e.preventDefault();
        console.log(data);

        if (!id) { 
          dispatch(loadCreateData({title:data.title,description:data.description,date:String(date)}))
          setState({
            title:'',
            description:''
          })
        }else{
          dispatch(loadUpdateData({_id:id,title:data.title,description:data.description}))
          navigate("/")
        }
      }

  return (
    <>
    <form className={classes.form} onSubmit={submitHandler}  >
      <Input label={"Title"} type="text" onChange={onChangehandler} name="title" value={data.title}  />
      <Input label={"Description"} type="text" onChange={onChangehandler} name="description" value={data.description}  />
       {!id && <p style={{display:"flex",gap:'10px'}} >Due: <DatePick date={date} setDate={setDate} /></p>}
      <Btn type="submit" style={{width:'100%'}} >
        {id ? "Update" : "Add" }
      </Btn>
      <h4 onClick={() => {setState({title:'',description:''})}} >Reset</h4>
    </form>
    </>
  )
}

export default memo(Form)