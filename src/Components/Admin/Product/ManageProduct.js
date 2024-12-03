import axios from "axios"
import { useState,Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import ApiServices, { BASE_URL } from "../../ApiServices"
import { toast } from "react-toastify"

export default function ManageProduct(){
const [data,setData]=useState([])

// useEffect(fn,[dependancy])
useEffect(
    ()=>{
    // console.log("btn")
   getData()
},[]
)

const getData=()=>{
    ApiServices.allproduct()
    .then((res)=>{
        console.log(res)
        setData(res.data.data)
    })
    .catch((err)=>{
        console.log(err)

    })

}


const deleteData=(id)=>{
    console.log("deleted",id)
    let data={
        _id:id
    }

    ApiServices.DeleteProduct(data)
    .then((res)=>{

        if(res.data.success){
            toast.success(res.data.message)
            getData(res.data.data)
        }

        else{
            toast.error(res.data.message)
        }
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

    ApiServices.DeleteProduct(data)
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
            <h1 >All Product Loaded</h1><br/>
            
           <div className="container table-responsive">
            <table className="table table-striped table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                    <th> Sno</th>
                    <th> Name</th>
                    <th> Image</th>
                    <th> Brand</th>
                    <th> Status</th>
                    <th>View</th>
                    <th>Change Status</th>
                    <th>Edit</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {data?.map(
                        (el,index)=>
                        (
                            <tr>
                                <td>{index+1}</td>
                                <td>{el.productName}<br/>
                                {/* {el._id} */}
                                </td>
                                <td>
                                    <img src={BASE_URL +el.productImage} style={{height:"100px", width:"100px"}}/>
                                </td>
                                <td>{el.brand}</td>
                                <td>{el.status.toString()}
                                <br/>
                                {el.status==true?"Active":"In-active"}
                                </td>
                                <td>
                                    <Link to={"/admin/singleproduct/" +el._id}
                                    className="btn btn-info">
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                </td>
                                <td>
                                    <button className="btn btn-info" onClick={
                                        ()=>{
                                            changeStatus(el._id, el.status)
                                        }
                                    }>Change Status</button>
                                </td>
                                <td>
                                    <Link to={"/admin/editproduct/" +el._id}
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