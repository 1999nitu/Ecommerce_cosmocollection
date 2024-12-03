import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ApiServices, { BASE_URL } from "../../ApiServices"
import { toast } from "react-toastify"

export default function EditSubCategory(){
    const [name,setName]=useState("")
    const [image,setImage]=useState({})
    const [imageName,setImageName]=useState("")
    const [previousImg,setPreviousImg]=useState("")
    const [description,setDescription]=useState("")
    const [categoryId,setCategoryId]=useState("")

    const [allCategory,setAllCategory]=useState([])


    useEffect(()=>{
        getCategory()
    },[])
    const getCategory=()=>{
        ApiServices.allcategory()
        .then((res)=>{
        if(res.data.success)
        {
            setAllCategory(res.data.data)
        }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const param=useParams()
    console.log(param.id);
    const id=param.id
    useEffect(()=>{
        let data={
            _id:id
        }
        ApiServices.singlesubcategory(data)
        .then((res)=>{
            console.log(res);
            setName(res.data.data.subcategoryName)
            setPreviousImg(res.data.data.subcategoryImage)
            setDescription(res.data.data.description)
            setCategoryId(res.data.data.categoryid)
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
        data.append("subcategoryName",name)
        data.append("_id",id)

        if(!!imageName){
            data.append("subcategoryImage",image)
        }
        
        ApiServices.updatesubcategory(data)
        .then((res)=>{
            if(res.data.success==true)
            {
                toast.success(res.data.message)
                nav("/managesubcategory")
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
        <h1>Edit SubCategory</h1>
        <br/>
            <form onSubmit={handleForm}>
                <label>Sub Category Name</label>
                <input value={name} onChange=
                {
                    (e)=>{
                    setName(e.target.value)
                }}/>
                <br/>
                <br/>

                <img src={BASE_URL+previousImg} style={{height:"100px",width:"100px"}}/>
                
                <label>Sub Category Image</label>
                <input type="file" value={imageName} onChange=
                {
                    (e)=>{
                        setImageName(e.target.value)
                        setImage(e.target.files[0])
                    }}/>
                <br/>
                <br/>

                <label>Description</label>
                <input value={description} onChange=
                {
                    (e)=>{
                    setDescription(e.target.value)
                }}/>
                <br/>
                <br/>

                <label>Category</label>
                <select value={categoryId} onChange={(e)=>{setCategoryId(e.target.value)}}>

                    <option selected disabled value={""}>Choose One </option>
                    {allCategory?.map((el,index)=>(
                    <option value={el._id}>{el.categoryName}</option>
                    ))}
                </select>
                
                <br/>
                <br/>

                <button>Submit</button>
            </form>
        </>
    )
}