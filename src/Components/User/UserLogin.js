import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {ToastContainer, toast} from 'react-toastify'
import {HashLoader} from "react-spinners"


export default function UserLogin(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[name,setName]=useState("")
    const[msg,setMsg]=useState("")
    const[load,setLoad]=useState(false)
    

    const changeEmail=(event)=>{
        // console.log("changed",event.target.value)
        setEmail(event.target.value)
    }

    const changePassword=(e)=>{
        setPassword(e.target.value)
    }
    const nav= useNavigate()

    const handleForm=(e)=>{
        // console.log("form submitted")
        e.preventDefault()
        setLoad(true)
        if(email=="user@gmail.com" && password=="user")
        {
            // console.log("Valid")
            nav("/home")
        }
        else{
            console.log("invalid")
            // alert("invalid user")
            // setMsg("invalid user")
           toast.error("invalid user")
           setTimeout(()=>{ 
            setLoad(true)},2000)
           
        }
    }
    const obj={
        display:"block",
        margin:"0 auto"
    }
    return(
        <>
            {/* <div className="d-flex
            justify-content-center"> */}

            <HashLoader color="green" size={50} cssOverride={obj} loading={load}/>

            {/* </div> */}
            <div className={load==true?"d-none":""}>
            <p>{msg}</p>
            <form onSubmit={handleForm}>

                <label>Email</label>
                <input value={email} onChange={changeEmail}/>
                {email}
                <br/>
                <br/>

                <label>Password</label>
                <input value={password} onChange={changePassword}/>
                {password}
                <br/><br/>

                <label>Name</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}}/>
                {name}
                <br/><br/>

                <button>Submit</button>

            </form>
            </div>
            
        </>
    )
}