import axios from "axios"
import { useState,Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import ApiServices, { BASE_URL } from "../../ApiServices"
import Moment from "react-moment"
import { toast } from "react-toastify"

export default function ManageSubCategory(){
const [data,setData]=useState([])

// useEffect(fn,[dependancy])
useEffect(
    ()=>{
    // console.log("btn")
        getData()
  
},[]
)

const getData=()=>{
    ApiServices.allsubcategory()
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
    ApiServices.deletesubcategory(data)
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
            <h1><center>All SubCategory Loaded</center></h1><br/>

            
           <div className="container table-responsive">
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                    <th> Sno</th>
                    <th> Name</th>
                    <th> Image</th>
                    <th> CategoryId</th>
                    <th> Description</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>CreatedAt</th>
                    <th> Status</th>
                    <th>Change Status</th>

                    </tr>
                </thead>
                <tbody>
                    {data?.map(
                        (el,index)=>
                        (
                            <tr>
                                <td>{index+1}</td>
                                <td>{el.subcategoryName}
                               
                                </td>
                                <td>
                                    <img src={BASE_URL +el.subcategoryImage} style={{height:"100px", width:"100px"}}/>
                                </td>
                                <td> {el._id} </td>
                                <td>Description1 </td>
                                <td>
                                    <Link to={"/admin/singlesubcategory/" +el._id}
                                    className="btn btn-info">
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={"/admin/editsubcategory/"+el._id}
                                    className="btn btn-success">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                </td>
                                <td>
                                    <Moment fromNow ago >{el.createdAt}</Moment>
                                    {/* format="MMMM/D/YYYY" */}
                                </td>
                                <td>{el.status.toString()}
                                <br/>
                                {el.status==true?"Active":"In-active"}
                                </td>
                                <td>
                                    <button className="btn btn-dark" onClick={
                                        ()=>{
                                            changeStatus(el._id, el.status)
                                        }
                                    }>Change Status</button>
                                </td>
                               
                            </tr>
                        )
                    )}
                </tbody>
            </table>
           </div>
            {/* <button onClick={getData}>Get Data</button> */}

        </>
    )
}