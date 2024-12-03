import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ApiServices from "../../ApiServices"
import { toast } from "react-toastify"

export default function AddCoupon(){

    const [coupon,setCoupon]=useState("")
    const [discount,setDiscount]=useState("")
    const [couponType,setCouponType]=useState("")
    const [amount,setAmount]=useState("")
    const [offvalue,setOffValue]=useState("")

    const param=useParams()
    console.log(param.id);
    const id=param.id
    useEffect(()=>{
        let data={
            _id:id
        }
        ApiServices.singlecoupon(data)
        .then((res)=>{
            console.log(res);
            setCoupon(res.data.data.coupon)
            setDiscount(res.data.data.discount)
            setCouponType(res.data.data.couponType)
            setAmount(res.data.data.amount)
            setOffValue(res.data.data.offvalue)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]
    )
    const nav=useNavigate()

    const handleForm=(e)=>{
        e.preventDefault()

        let data={
            _id:id
        }
        ApiServices.updatecoupon(data)
        .then((res)=>{
            if(res.data.success==true)
            {
                toast.success(res.data.message)
                nav("/managecoupon")
            }else{
                toast.error(res.data.message)
            }
        })
        .catch((err)=>{
            toast.error("something went wrong")
        })
    }


    return(
        <>
            <h1>Edit Coupons</h1>
            <br/>
            <form onSubmit={handleForm}>
                <label>Coupon </label>
                <input value={coupon} onChange={(e)=>{setCoupon(e.target.value)}}/>
                <br/>
                <br/>

                <label>Discount</label>
                <input value={discount} onChange={(e)=>{setDiscount(e.target.value)}}/>
                <br/>
                <br/>
                
                <label>couponType</label> 
                <input type="radio" value={couponType} onChange={(e)=>{setCouponType(e.target.value)}}/>Flat
                <input type="radio" value={couponType} onChange={(e)=>{setCouponType(e.target.value)}}/>Percentage
                <br/>
                <br/>

                <label>amount</label>
                <input value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
                <br/>
                <br/>

                <label>offvalue </label>
                <input value={offvalue} onChange={(e)=>{setOffValue(e.target.value)}}/>
                <br/>
                <br/>

                <button>Submit</button>

            </form>
        </>
    )
}