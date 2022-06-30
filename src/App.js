import React , {useState} from 'react'
import Login from './Login';
import Loading from "./Loading"
import Mainpage from "./Mainpage"

import { users } from './Data';

import './App.css';
import "./style.css"
import "./main.js"

function App() {

  const [Routing , setRouting] = useState("login")
  const [Username , setUsername] = useState()
  const [Userpass , setUserpass] = useState()
  const [ValidationState ,setValidation] = useState(true)

  function x(){
    setRouting("mainpage")
  }

  const changeUser = (e)=>{
    setUsername(e.target.value)
  }
  const changePass = (p)=>{
    setUserpass(p.target.value)
  }
  
  const Inter = (e)=>{
    e.preventDefault()
    let user = users.filter((user)=>user.accountName === Username )
    let pass = user[0].pass
      if(pass === Userpass){
          setRouting("loading")
          setTimeout(x , 3000)
      }else{
        setValidation(false)
        setUsername("")
        setUserpass("")
      }
  }

  let all = {Inter ,changeUser, changePass ,ValidationState ,Username,Userpass}

  return (

    <div className="App">
      {/* {Routing === "login" && <Login {...all} />}
      {Routing === "loading" && <Loading/>} */}
      {<Mainpage/>}
    </div>
  );
}

export default App;
