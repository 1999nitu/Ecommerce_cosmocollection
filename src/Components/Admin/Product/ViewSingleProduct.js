
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { toast } from "react-toastify";
import ApiServices, { BASE_URL } from "../../ApiServices";

export default function ViewSingleProduct(){

    const [data,setData]=useState({})
   let param= useParams()
   console.log(param.id);

   const id= param.id
   useEffect(()=>
   {
    let data={
        _id: id
    }
    ApiServices.singleproduct(data)
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
           <h1>Single Product</h1> 
           productName:  {data.productName}<br/>
           productImage:  <img src={BASE_URL+data.productImage} style={{height:"100px", width:"100px"}}/><br/>
           price:  {data.price}<br/>
           quantity:  {data.quantity}<br/>
           price:  {data.price}<br/>
           brand:  {data.brand}<br/>
        </>
    )
}