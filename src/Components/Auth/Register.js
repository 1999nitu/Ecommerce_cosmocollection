// import axios from "axios"
// import { useState } from "react"
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';
// import ApiServices from "../ApiServices";

// export default function Register(){
//     const [name,setName]=useState("")
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const [contact,setContact]=useState("")
//     const [address,setAddress]=useState("")
//     const nav=useNavigate()

//     const handleForm=(e)=>{
//         e.preventDefault()
//         let data={
//             name:name,
//             email:email,
//             password:password,
//             contact:contact,
//             address:address
//         }
//         // axios.post("http://localhost:4000/apis/user/register",data)
//         ApiServices.register(data)
//         .then((res)=>{
//             console.log(res)
//             if(res.data.success==true){
//                 toast.success(res.data.message)
//                 let dataLogin={
//                     email:email,
//                     password:password
//                 }
//         ApiServices.login(dataLogin)

//                 .then((res)=>{
//                     // console.log(res)
//                     if(res.data.success==true)
//                     {
//                         sessionStorage.setItem("token",res.data.token)
//                         if(res.data.data.userType==1)
//                         {
//                             nav("/managecategory")
//                         }
//                         else{
//                             nav("/login")
//                         }
//                 }})
//                 .catch((err)=>{
//                     console.log(err)
//                 })
//             }
//             else{
//                 toast.error(res.data.message)
//             }
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }
//     return(
//         <>
       
//         <div className="col-md-6 contact-form">
//             <h4 className="white-w3ls">
//               Register <span>Form</span>
//             </h4>
//         <form action="#" method="post" onSubmit={handleForm}>
//               <div className="styled-input agile-styled-input-top">
                
//               </div>

//             <div className="styled-input">
//                 <input type="email" name="Email" required="" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//                 <label>Email</label>
//                 <span />
//             </div>

//             <div className="styled-input">
//                 <input type="text" name="password" required="" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
//                 <label>Password</label>
//                 <span />
//             </div>

//             <div className="styled-input">
//                 <input type="text" name="name" required="" value={name} onChange={(e)=>{setName(e.target.value)}} />
//                 <label>Name</label>
//                 <span />
//             </div>

//             <div className="styled-input">
//                 <input type="text" name="contact" required="" value={contact} onChange={(e)=>{setContact(e.target.value)}} />
//                 <label>Contact</label>
//                 <span />
//             </div>

//             <div className="styled-input">
//                 <input type="text" name="address" required="" value={address} onChange={(e)=>{setAddress(e.target.value)}} />
//                 <label>Address</label>
//                 <span />
//             </div>

//             <div className="styled-input ">
               
//             </div>
//               <input type="submit" defaultValue="SEND" />
//         </form>
// </div>
       
//         <div className="clearfix"> </div>

//             <ToastContainer
//             position="top-right"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//             />
//         </>
//     )
// }



import { Link, useNavigate, useSearchParams } from "react-router-dom"
import ApiServices from "../ApiServices"
import { useState } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify"
import { ClipLoader } from "react-spinners"
export default function Register(){
    const nav=useNavigate()
    const [loading,setLoading]=useState(false)
    const override={
        
        "display":"block",
        margin:"0 auto",
        "zIndex":"1",
    }
   
    const [name, setName]=useState()
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const [contact,setContact]=useState("")
    const [address,setAddress]=useState("")
    const handleForm=(e)=>{
        e.preventDefault()
        setLoading(true)
        let data={
            name:name,
            email:email,
            password:password,
            contact:contact,
            address:address
        }
        ApiServices.register(data)
        .then((res)=>{
            if(res.data.success){
                toast.success(res.data.message)
                let dataLogin={
                    name:name,
                    email:email,
                    password:password,
                    contact:contact,
                    address:address
                }
                ApiServices.login(dataLogin).then((res)=>{
                    if(res.data.success){
                        sessionStorage.setItem("user_id", res.data.data._id)
                        sessionStorage.setItem("user_name", res.data.data.name)
                        sessionStorage.setItem("user_email", res.data.data.email)
                        sessionStorage.setItem("token", res.data.token)
                        sessionStorage.setItem("user_type", res.data.data.userType)
                        sessionStorage.setItem("authenticate",true)
                        if(res.data.data.userType==1|| res.data.data.userType=="1"){
                            nav("/admin")
                        }
                        else{
                            nav("/home")
                        }
                    }
                    else{
                        toast.error(res.data.message)
                    }
                }).catch((err)=>{
                    console.log(err)
                    toast.error("Something went Wrong")
                    setTimeout(()=>{
                        setLoading(false)
                    },1000)
                })
            }
            else{
                toast.error(res.data.message)
                setTimeout(()=>{
                    setLoading(false)
                },1000)
            }
        }).catch((err)=>{
            console.log(err)
            toast.error("Something went wrong")
            setTimeout(()=>{
                setLoading(false)
            },1000)
        })
    }
    return(
        <>
        <div className="page-head_agile_info_w3l">
               <div className="container">
                   <h3>
                   User <span>Register </span>
                   </h3>
                   <div className="services-breadcrumb">
                   <div className="agile_inner_breadcrumb">
                       <ul className="w3_short">
                       <li>
                           <Link to={"/Home"}>Home</Link>
                           <i>|</i>
                       </li>
                       <li>Register</li>
                       </ul>
                   </div>
                   </div>
               </div>
           </div>
           <div className="d-flex justify-content-center my-5">
               <ClipLoader loading={loading} cssOverride={override} size={120}/>
           </div>     
                <div className={loading?"disabled-screen":""}>
       
           <div className="container-fluid my-5">
               <div className="row ">
                   <div className='col-md-3'></div>
                   <div className="col-md-6  contact-form">
                       <h4 className="white-w3ls">
                           SignUp <span>Form</span>
                       </h4>
                       <form onSubmit={handleForm} method="post">
                           <div className="styled-input">
                           <input type="text" name="name" required="" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                           <label>Name</label>
                           <span />
                           </div>
                           <div className="styled-input">
                           <input type="email" name="Email" required="" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                           <label>Email</label>
                           <span />
                           </div>
                           <div className="styled-input">
                           <input type="password" name="Password" required="" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                           <label>Password</label>
                           <span />
                           </div>
                           <div className="styled-input">
                           <input type="text" name="contact" required="" value={contact} onChange={(e)=>{setContact(e.target.value)}} />
                            <label>Contact</label>
                           <span />
                           </div>
                           <div className="styled-input">
                           <input type="text" name="address" required="" value={address} onChange={(e)=>{setAddress(e.target.value)}} />
                           <label>Address</label>
                           <span />
                           </div>
                           <input type="submit" value="SEND" />
                       </form>
                   </div>
               </div>
           </div>
       </div>
       <ToastContainer/>
       </>
    )
}

