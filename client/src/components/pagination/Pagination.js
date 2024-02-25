import React, { memo, useContext, useEffect, useState } from 'react'
import classes from "./pagination.module.css"
import { ContextProvider } from '../../App';
import { useSelector } from 'react-redux';

const Pagination = () => {

    const {paginationData,setpaginationData} = useContext(ContextProvider)


   const data = useSelector(state => state.todoReducer.todoData)

    const [currentPage,setCurrentPage] = useState(1);
    const recordsPerPage = 6;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex,lastIndex);
    const npage = Math.ceil(data.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    useEffect(()=>{
    setpaginationData(records)
    },[data,currentPage])
  
  
    const prePage = () => {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1)
      }
    }
  
    const changeCPage = (id) => {
      setCurrentPage(id)
    }
  
    const nextPage = () => {
      if (currentPage !== npage) {
        setCurrentPage(currentPage + 1)
      }
    }

  return (
    <>
    <ul className={classes.pagination} >
  <li className='page-item' >
    <button className='page-link' onClick={prePage} >Prev</button>
  </li>
  {
    numbers.map((n,i) => (
      <li  className={classes[`${currentPage === n ? 'active' : '' }`]} key={i} >
        <button className='page-item' onClick={() => {changeCPage(n)}} >{n}</button>
      </li>
    ))
  }
  <li className='page-item' >
    <button className='page-link' onClick={nextPage} >Next</button>
  </li>
</ul>
    </>
  )
}

export default memo(Pagination)