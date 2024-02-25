import React, { memo, useContext, useState } from 'react'
import classes from "./home.module.css"
import Input from '../../components/input/Input'
import Form from '../../components/todoform/Form'
import { ContextProvider } from '../../App'
import Pagination from '../../components/pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { loadComfirm, loadDeleteData, loadSearch } from '../../redux/actions/actionTodo'
import Bg from '../../components/bg/Bg'
import { useNavigate, useParams } from 'react-router-dom'
import CountdownTimer from '../../components/countdown/CountDown'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const search = useSelector(state => state.todoReducer.search)
  const {paginationData} = useContext(ContextProvider)
  const searchFilter = paginationData.filter((i)=> i.title.toLowerCase().includes(search.toLowerCase()) || i.description.toLowerCase().includes(search.toLowerCase()) )

  


  return (
    <div className={classes.home}>
    <Form/>
    <div className={classes.todo} >
    <Input type="text" label="Search" value={search} onChange={(e)=>{dispatch(loadSearch(e.target.value))}}  />
{/* list */}
    <ul className={classes.todolist} >{
        searchFilter.map((i)=>(
          <li key={i._id} >
        <h2>{i.title} </h2>
        <span className={classes.duedate} ><CountdownTimer targetDate={i.date} /></span>
        <p>{i.description}</p>
        <div className={classes.btns} >
        <button onClick={() => {navigate(`/${i._id}`,{state:i});}} ><svg width="20px" height="20px" viewBox="0 -0.5 21 21" version="1.1"   fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>edit_cover [#1481]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -359.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M384,209.210475 L384,219 L363,219 L363,199.42095 L373.5,199.42095 L373.5,201.378855 L365.1,201.378855 L365.1,217.042095 L381.9,217.042095 L381.9,209.210475 L384,209.210475 Z M370.35,209.51395 L378.7731,201.64513 L380.4048,203.643172 L371.88195,212.147332 L370.35,212.147332 L370.35,209.51395 Z M368.25,214.105237 L372.7818,214.105237 L383.18415,203.64513 L378.8298,199 L368.25,208.687714 L368.25,214.105237 Z" id="edit_cover-[#1481]"> </path> </g> </g> </g> </g></svg></button>
         <button onClick={() => {dispatch(loadComfirm(1))}} ><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></button> 
         <button onClick={() =>{dispatch(loadDeleteData({_id:i._id}))}} ><svg width="20px" height="20px" viewBox="0 -0.5 21 21" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg></button>
        </div>
        <Bg data={1} >
          <div className={classes.view} >
            <h1>{i.title}</h1>
            <p>{i.description}</p>
            <h4><CountdownTimer targetDate={i.date} /></h4>
          </div>
        </Bg>
      </li>
        ))
      }
    </ul>
{/* pagination */}
      <Pagination/>

    </div>
   
    </div>
  )
}

export default memo(Home)