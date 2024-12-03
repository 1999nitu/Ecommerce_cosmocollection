import { useEffect, useState } from "react"
import ApiServices from "../../ApiServices"
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import { ClipLoader } from "react-spinners";



export default function AddSubCategory(){
    const [loading,setLoading]=useState(false)
    const override={
        
        "display":"block",
        margin:"0 auto",
        "zIndex":"1",
    }
    const [allCategory,setAllCategory]=useState([])
    const [categoryId,setCategoryId]=useState("")

    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [category,setCategory]=useState("")
    const [image,setImage]=useState({})
    const [imageName,setImageName]=useState("")

    const nav=useNavigate()



useEffect(()=>{
    getCategory()
    },[])

const getCategory=()=>{
    ApiServices.allcategory()
    .then((res)=>{
    if(res.data.success)
    {
        setAllCategory(res.data.data)
    }
    })
    .catch((err)=>{
        console.log(err)
    })
}
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
    
            // store form data
            let data=new FormData()
            data.append("subcategoryName",name)
            data.append("subcategoryImage",image)
            data.append("categoryId",categoryId)
            data.append("description",description)
            

            let obj={
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            }
            console.log(obj)
            // console.log(data)
            axios.post("http://localhost:4000/apis/subcategory/add",data,obj)
            .then((res)=>{
                console.log(res)
                if(res.data.success==true)
                {
                    toast.success(res.data.message)
                    setName("") 
                    setImage({})
                    setImageName("")
                    //  this  will empty form
                    
                    setCategory("") 
                    setDescription("") 

                nav("/managesubcategory")

                    
                }else{
                    toast.error(res.data.message)  
                }
            })
            .catch((err)=>{
                console.log(err)
            }) }
    return(
        <>
  <div className="page-head_agile_info_w3l">
                <div className="container">
                    <h3>
                    Add <span>Sub-Category </span>
                    </h3>
                    <div className="services-breadcrumb">
                    <div className="agile_inner_breadcrumb">
                        <ul className="w3_short">
                        <li>
                            <Link to={"/admin"}>Home</Link>
                            <i>|</i>
                        </li>
                        <li>Sub-Category</li>
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
                <div className="col-md-8  border border-3 border-danger py-5 rounded">
                        <form onSubmit={handleForm}>
                            <div className="row my-3">
                                <div className="col-md-2">
                                    <label>Sub-Category Name</label>
                                </div>
                                <div className="col-md-10">
                                    <input className="form-control" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                </div>
                            </div>
                            <div className='row my-3'>
                                <div className="col-md-2">
                                    <label>Category</label>
                                </div>
                                <div className="col-md-10">
                                    <select required className="form-control" onChange={(e)=>{setCategoryId(e.target.value)}} value={categoryId}>

                                        <option selected disabled value="">Choose Category</option>
                                        {
                                            allCategory?.map((el,index)=>(
                                                <option key={index+1} value={el?._id}>{el?.categoryName}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-md-2">
                                    <label>Image</label>
                                </div>
                                <div className="col-md-10">
                                    <input className="form-control" type="file" onChange={changeImage} value={imageName}/>
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col-md-2">
                                    <label>Description</label>
                                </div>
                                <div className="col-md-10">
                                    <input className="form-control" type="description" onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
                                </div>
                            </div>

                            <div className="row my-3">
                            <div className="col-md-4"></div>
                                <div className='col-md-5 '>
                                    <button className='form-control btn btn-primary'>Submit</button>
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