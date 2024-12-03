
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { toast } from "react-toastify";
import ApiServices, { BASE_URL } from "../../ApiServices";

export default function ViewSingleCategory(){

    const [data,setData]=useState({})
   let param= useParams()
   console.log(param.id);

   const id= param.id
   useEffect(()=>
{
    let data={
        _id: id
    }
    ApiServices.singlecategory(data)
    .then((res)=>{
        // console.log(res);
        setData(res.data.data)
    })
    .catch((err)=>{
        toast.error("something went wrong")
    })
},[]
)

    return(
        <>
           <h1>Single Category</h1> 
           <div className="card">
           categoryName: {data.categoryName}<br/>
           categoryImage: <img src={BASE_URL+data.categoryImage} style={{height:"100px", width:"100px"}}/>
           </div>
        </>
    )
}