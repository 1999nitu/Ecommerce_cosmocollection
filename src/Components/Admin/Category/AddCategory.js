import axios from "axios"
import { useState } from "react"
import {  Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ApiServices from "../../ApiServices";
import { ClipLoader } from "react-spinners"



export default function AddCategory(){
    const [loading,setLoading]=useState(false)
    const override={
        
        "display":"block",
        margin:"0 auto",
        "zIndex":"1",
    }

    const [name,setName]=useState("")
    const [image,setImage]=useState({})
    const [imageName,setImageName]=useState("")
    // const token=sessionStorage.getItem("token")
    // if(!token)
    //     {
    //         return <Navigate to={"/login"}/>
    //     }

  const nav=useNavigate()

    const changeImage=(e)=>{
        setImageName(e.target.value)
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }
    const handleForm=(e)=>{
        // {header:{
        //     Authorization:token
        // }}
        e.preventDefault()
        setLoading(true)

        // store form data
        let data=new FormData()
        data.append("categoryName",name)
        data.append("categoryImage",image)
        let obj={
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }
        console.log(obj)
        // console.log(data)
        axios.post("http://localhost:4000/apis/category/add",data,obj)
        .then((res)=>{
            setLoading(false)

            console.log(res)
            if(res.data.success==true)
            {
                toast.success(res.data.message)
                setName("") 
                //  this  will empty form
                setImage({})
                setImageName("")
                
                nav("/admin/managecategory")

            }else{
                toast.error(res.data.message)  
            }
        })
        .catch((err)=>{
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
                    Add <span>Category </span>
                    </h3>
                    <div className="services-breadcrumb">
                    <div className="agile_inner_breadcrumb">
                        <ul className="w3_short">
                        <li>
                            <Link to={"/admin"}>Home</Link>
                            <i>|</i>
                        </li>
                        <li>Category</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center my-5">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div>     
            <div className={loading?"disabled-screen":""}>
                <div className="container-fluid my-5"style={{marginTop:"3rem",marginBottom:"3rem"}}>
                    <div className="row">
                        <div className="col-md-2"></div>
                    <div className="col-md-8 border border-3 border-danger py-5 rounded">
                            <form onSubmit={handleForm}>
                                <div className="row my-3">
                                    <div className="col-md-2">
                                        <label>Category Name</label>
                                    </div>
                                    <div className="col-md-10">
                                        <input className="form-control" type="text" required="" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-md-2">
                                        <label>Image</label>
                                    </div>
                                    <div className="col-md-10">
                                        <input className="form-control" type="file" required="" onChange={changeImage} value={imageName}/>

                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-4"></div>
                                    <div className='col-md-5 '>
                                        <button className='form-control  btn btn-primary'>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         </>

    )
}