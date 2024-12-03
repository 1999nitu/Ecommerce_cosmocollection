import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ApiServices, { BASE_URL } from "../../ApiServices"
import { toast } from "react-toastify"

export default function EditCategory(){
    const [name,setName]=useState("")
    const [image,setImage]=useState({})
    const [imageName,setImageName]=useState("")
    const [previousImg,setPreviousImg]=useState("")
    const param=useParams()
    console.log(param.id);
    const id=param.id
    useEffect(()=>{
        let data={
            _id:id
        }
        ApiServices.singlecategory(data)
        .then((res)=>{
            // console.log(res);
            setName(res.data.data.categoryName)
            setPreviousImg(res.data.data.categoryImage)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]
    )
    const nav=useNavigate()

    const handleForm=(e)=>{
        e.preventDefault()
        let data=new FormData()
        data.append("categoryName",name)
        data.append("_id",id)

        if(!!imageName){
            data.append("categoryImage",image)
        }
        ApiServices.updatecategory(data)
        .then((res)=>{
            if(res.data.success==true)
            {
                toast.success(res.data.message)
                nav("/managecategory")
            }else{
                toast.error(res.data.message)
            }
        })
        .catch((err)=>{
            toast.error("something went wrong",err)
        })
    }

    return(
        <>
        <h1>Edit Category</h1>
        <br/>
            <form onSubmit={handleForm}>
                <label>Category Name</label>
                <input value={name} onChange=
                {
                    (e)=>{
                    setName(e.target.value)
                }}/>
                <br/>
                <br/>

                <img src={BASE_URL+previousImg} style={{height:"100px",width:"100px"}}/>
                
                <label>Category Image</label>
                <input type="file" value={imageName} onChange=
                {
                    (e)=>{
                        setImageName(e.target.value);
                        setImage(e.target.files[0])
                    }}/>
                <br/>
                <br/>
                <button>Submit</button>
            </form>
        </>
    )
}