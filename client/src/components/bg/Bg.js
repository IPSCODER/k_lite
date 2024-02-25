import React, { memo, useContext } from 'react'
import classes from "./bg.module.css"
import { ContextProvider } from '../../App'
import { useDispatch, useSelector } from 'react-redux'
import { loadComfirm } from '../../redux/actions/actionTodo'

const Bg = (props) => {

  // const {comfirmBtn,setComfirmBtn} = useContext(ContextProvider)
  const dispatch = useDispatch()

  const comfirm = useSelector(state => state.todoReducer.comfirmBtn)

  const clear = () =>{
    // setComfirmBtn(null); 
    dispatch(loadComfirm(null))
  }


  return (
    <>
    {comfirm  && comfirm === props.data && <div className={classes.bg}   >
      <div className={classes.a} onClick={clear} >

      </div>
    {props.children}
</div>}
    </>
  )
}

export default memo(Bg)