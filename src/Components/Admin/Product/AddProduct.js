import { useEffect, useState } from "react"
import ApiServices from "../../ApiServices"
import axios from "axios"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function AddProduct(){
    const [loading,setLoading]=useState(false)
    const override={
        "display":"block",
        margin:"0 auto",
        "zIndex":"1",
    }
    const [allCategory,setAllCategory]=useState([])
    const [categoryId,setCategoryId]=useState("")
    const [subCategoryId,setSubCategoryId]=useState("")
    const [data,setData]=useState("")
    const [allSubCategory,setAllSubCategory]=useState([])
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
useEffect(()=>{
    getSubCategory()
},[categoryId])
const getSubCategory=()=>{
    let data={

    }
    if(!!categoryId){
        
          data.categoryId=categoryId
    }

    ApiServices.allsubcategory(data)
    .then((res)=>{
    if(res.data.success)
    {
        setAllSubCategory(res.data.data)
    }
    })
    .catch((err)=>{
        console.log(err)
    })
}

 const [name,setName]=useState("")
    const [brand,setBrand]=useState("")
    const [category,setCategory]=useState("")
    const [subcategory,setSubCategory]=useState("")
    const [image,setImage]=useState({})
    const [imageName,setImageName]=useState("")
    const [price,setPrice]=useState("")
    const [quantity,setQuantity]=useState("")



    // const token=sessionStorage.getItem("token")
    // if(!token)
    //     {
    //         return <Navigate to={"/login"}/>
    //     }

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
            data.append("productName",name)
            data.append("productImage",image)
            data.append("price",price)
            data.append("quantity",quantity)
            data.append("categoryId",categoryId)
            data.append("subcategoryId",subCategoryId)
            data.append("brand",brand)

            

            let obj={
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            }
            console.log(obj)
            // console.log(data)
            axios.post("http://localhost:4000/apis/product/add",data,obj)
            .then((res)=>{
                console.log(res)
                if(res.data.success==true)
                {
                    toast.success(res.data.message)
                    setName("") 
                    setImage({})
                    setImageName("")
                    //  this  will empty form
                    setPrice("") 
                    setQuantity("") 
                    setCategory("") 
                    setSubCategory("") 
                    setBrand("") 

                nav("/manageproduct")

                    
                }else{
                    toast.error(res.data.message)  
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    
        }


    return(
        <>
               <div className="page-head_agile_info_w3l">
                <div className="container">
                    <h3>
                    Add <span>Product </span>
                    </h3>
                    <div className="services-breadcrumb">
                    <div className="agile_inner_breadcrumb">
                        <ul className="w3_short">
                        <li>
                            <Link to={"/admin"}>Home</Link>
                            <i>|</i>
                        </li>
                        <li>Product</li>
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
                                    <label>Product Name</label>
                                </div>
                                <div className="col-md-10">
                                   <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                   
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
                            <div className="row my-3">
                                <div className="col-md-2">
                                    <label>Sub-Category Name</label>
                                </div>
                                <div className="col-md-10">
                                    <select required className="form-control" onChange={(e)=>{setSubCategoryId(e.target.value)}} value={subCategoryId}>
                                        <option selected disabled value="">Choose Sub-Category</option>
                                        {
                                            allSubCategory?.map((el,index)=>(
                                                <option key={index+1} value={el?._id}>{el?.subcategoryName}</option>
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
                                    <input className="form-control" type="file" onChange={(e)=>{setImageName(e.target.value);setImage(e.target.files[0])}} value={imageName} />
                                </div>
                            </div>
                            <div className='row my-3'>
                                <div className="col-md-2">
                                    <label>Price</label>
                                </div>
                                <div className="col-md-10">
                                    <input className="form-control" type="number" min={0} value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                                </div>
                            </div>
                            <div className='row my-3'>
                                <div className="col-md-2">
                                    <label>Brand</label>
                                </div>
                                <div className="col-md-10">
                                    <textarea className="form-control" type="text" value={brand} onChange={(e)=>{setBrand(e.target.value)}} />
                                </div>
                            </div>

                            <div className='row my-3'>
                                <div className="col-md-2">
                                    <label>Quantity</label>
                                </div>
                                <div className="col-md-10">
                                    <textarea className="form-control" type="text" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} />
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