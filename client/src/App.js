import { createContext, useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './auth/login/Login';
import Register from './auth/register/Register';
import Header from './components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { loadGetData } from './redux/actions/actionTodo';
import { loginInfos } from './redux/actions/actionUser';


 export const ContextProvider = createContext()


function App() {

  const dispatch = useDispatch()
  const [paginationData,setpaginationData] = useState([])
  
  const log = useSelector(state => state.userReducer.logininfo)

  useEffect(()=>{
    if (localStorage.getItem("name") == null){
      dispatch(loginInfos(false))
    }else{
      dispatch(loginInfos(true))
      dispatch(loadGetData())
    }

  },[localStorage.getItem("name")])


  return (
    <ContextProvider.Provider value={{paginationData,setpaginationData}}>
    <BrowserRouter>
 {log && <Header/>}
    <Routes>
      <>
      {
        !log ? (
          <>
      {!localStorage.getItem("name")&& (<>
        <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Register/>} />
      </>)}
          </>
        ): 
        (
          <>
          <Route path="/" element={<Home/>} />
      <Route path="/:id" element={<Home/>} />
          </>
        )
      }
      
      </>
    </Routes>
    </BrowserRouter>
    </ContextProvider.Provider>
  );
}

export default App;
