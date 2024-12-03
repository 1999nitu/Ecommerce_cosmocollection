import { useEffect, useState } from "react"
import ApiServices from "../../ApiServices"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

export default function ManageCoupon(){
const [data,setData]=useState([])



useEffect(
    ()=>{
   getData()
},[]
)
const getData=()=>{
    ApiServices.allcoupon(data)
    .then((res)=>{
        // console.log(res)
        setData(res.data.data)
    })
    .catch((err)=>{
        console.log(err)

    })
}

const changeStatus=(id,status)=>{
    // console.log("btn clicked",id,!status);
    let data={
        _id:id,
        status:!status
    }
    console.log(data);

    ApiServices.deletecoupon(data)
    .then((res)=>{
        if(res.data.success)
            {
                toast.success(res.data.message)
                getData()
            }
            else{
                toast.error(res.data.message)
            }
    })
    .catch((err)=>{
        console.log(err)
    })
}

    return(
        <>
        <h1><center>Coupons</center></h1>
            <div className="container table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Sno.</th>
                            <th>coupon_code</th>
                            <th>coupon_type</th>
                            <th>startDate</th>
                            <th>endDate</th>
                            <th>offamount</th>
                            <th>Status</th>
                            <th>ChangeStatus</th>
                            <th>View</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map(
                            (el,index)=>(
                            <tr>
                                <td>{index+1}</td>
                                <td>{el.coupon_code}</td>
                                <td>{el.coupon_type}</td>
                                <td>{el.startDate}</td>
                                <td>{el.endDate}</td>
                                <td>{el.offamount}</td>
                                <td>{el.status.toString()}</td>
                                {/* <br/>
                                {el.status==true?"Active":"In-active"} */}
                                <td>
                                    <button className="btn btn-dark" onClick={
                                        ()=>{
                                            changeStatus(el._id, el.status)
                                        }
                                    }>Change Status

                                    </button>
                                </td>
                                
                                <td>
                                    <Link to={"/singlecoupon/" +el._id}
                                    className="btn btn-info">
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={"/editcoupon/" +el._id}
                                    className="btn btn-success">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                </td>
                            </tr>
                            )
                          
                        )}
                      
                    </tbody>
                </table>

            </div>
        </>
    )
}