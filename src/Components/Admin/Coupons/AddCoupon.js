import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ApiServices from "../../ApiServices"
import { toast } from "react-toastify"

export default function AddCoupon(){
    const [code,setCode]=useState("")
    const [type,setType]=useState("")
    const [start,setStart]=useState("")
    const [end,setEnd]=useState("")
    const [off,setOff]=useState("")

    const handleForm=(e)=>{
        e.preventDefault()     
        let obj={
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }
        // console.log(obj)
        ApiServices.addcoupon()
        .then((res)=>{
            console.log(res)
            if(res.data.success==true)
                {
                    toast.success(res.data.message)
                    setCode("")
                    setStart("")
                    setEnd("")
                    setOff("")
                   

                    nav("/managecoupon")
                }
                else{
                toast.error(res.data.message)  

                }
        })
        .catch((err)=>{
            console.log(err)
        })

        
    }

    const nav=useNavigate()

  

    return(
        <>
            <h1>Add Coupons</h1>
            <br/>
            <form onSubmit={handleForm}>
                <label>coupon_code</label>
                <input value={code} onChange={(e)=>{setCode(e.target.value)}}/>
                <br/>
                <br/>
                <label>coupon_type</label>
                <input type="radio"/>Flat
                <input type="radio"/>Percentage
                <br/>
                <br/>
                <label>startDate</label>
                <input value={start} onChange={(e)=>{setStart(e.target.value)}}/>

                <br/>
                <br/>
              
                <label>endDate </label>
                <input value={end} onChange={(e)=>{setEnd(e.target.value)}}/>

                <br/>
                <br/>

                <label>offamount </label>
                <input value={off} onChange={(e)=>{setOff(e.target.value)}}/>

                <br/>
                <br/>
                <button>Submit</button>

            </form>
        </>
    )
}