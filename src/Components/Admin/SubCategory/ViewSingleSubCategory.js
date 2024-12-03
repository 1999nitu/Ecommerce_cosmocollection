
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { toast } from "react-toastify";
import ApiServices, { BASE_URL } from "../../ApiServices";

export default function ViewSingleSubCategory(){

    const [data,setData]=useState({})
   let param= useParams()
   console.log(param.id);

   const id= param.id
   useEffect(()=>
{
    let data={
        _id: id
    }
    ApiServices.singlesubcategory(data)
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
           <h1>Single Sub Category</h1> 
           categoryId:  {data._id}<br/>
           subcategoryName:  {data.subcategoryName}<br/>
           subcategoryImage:  <img src={BASE_URL+data.subcategoryImage} style={{height:"100px", width:"100px"}}/><br/>
           Description:  {data.Description}
        </>
    )
}