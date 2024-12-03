
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { toast } from "react-toastify";
import ApiServices, { BASE_URL } from "../../ApiServices";

export default function ViewSingleCoupon(){

    const [data,setData]=useState({})
   let param= useParams()
   console.log(param.id);

   const id= param.id
   useEffect(()=>
{
    let data={
        _id: id
    }
    ApiServices.singlecoupon(data)
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
           <h1>Single Coupon</h1> 
           coupon:{data.coupon}<br/>
           discount:{data.discount}<br/>
           couponType:{data.couponType}<br/>
           amount:{data.amount}<br/>
           offvalue:{data.offvalue}

        </>
    )
}