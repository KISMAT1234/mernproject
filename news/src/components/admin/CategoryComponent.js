import React,{useEffect,useState} from 'react';
import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Swal from 'sweetalert2'
import AdminAside from "./AdminAside";
import AdminHeader from "./AdminHeader";
import apiUrl from "../../config/apiUrl";

let categorySchema = yup.object().shape({
    title: yup.string().required(),
    slug: yup.string().required()
});



function CategoryComponent(){
    const {setValue, register, setError, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: yupResolver(categorySchema)
    });
    const [loading, setLoading] = useState(true);
    const [categories,setCategories]=useState({});
    const [cBtn, setcBtn] = useState("Add Category");
    const [cId, setcId] = useState("");

    const errorColor={
        color: "red"
    }

    const getCategories=async ()=>{
        apiUrl.get("/category").then((response)=>{
            setCategories(response.data);
            setLoading(false);
        }).catch((err)=>{
            console.log(err);
        });

    }

    useEffect(()=>{
        getCategories();
    },[]);

    const insertData = (data)=>{
        if(cId==""){
            apiUrl.post("/category", data).then((response)=>{
            if(response.data.success){
                getCategories();
                Swal.fire({
                    icon: "success",
                    title: response.data.message,
                    timer: 1500
                });
                reset();
                    
            }else{
                console.log(response.data);
            }
            
            }).catch((err)=>{
                console.log(err);
            })
        }else{
            apiUrl.put(`/category/${cId}`, data).then((response)=>{
                if(response.data.success){
                    getCategories();
                    Swal.fire({
                        icon: "success",
                        title: response.data.message,
                        timer: 1500
                    });
                    reset();
                    setcBtn("Add Category");
                    setcId("");
                        
                }else{
                    console.log(response.data);
                }
                
                }).catch((err)=>{
                    console.log(err);
                })
        }
        
    }

    const deleteCategory = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this category!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                apiUrl.delete(`/category/${id}`).then((response)=>{
                    if(response.data.success){
                        getCategories();
                        Swal.fire({
                            icon: "success",
                            title: response.data.message,
                            timer: 1500
                          });
                    }else{
                        console.log(response.data);
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            }
          })

    }

    const editCategory = (id)=>{
        setcBtn("Update Category");
        setcId(id);
        apiUrl.get(`/category/${id}`).then((response)=>{
            if(response.data){
                setValue("title", response.data.title);
                setValue("slug", response.data.slug);
            }
        }).catch((err)=>{
            console.log(err);
        })


    }
     

    return(
        <>
            <AdminHeader/>
            <AdminAside/>
            <main id="main" className="main">
            <section className="section dashboard">
            <div className="card">
                    <div className="card-body">
            <div className="row mb-3">
                <div className="col-md-12 mt-3">
                    <h1>Manage Category</h1>
                </div>
            </div>
            <div className="row mb-3">
                <form action="" onSubmit={handleSubmit(insertData)}>
                    <div className="form-group mb-2">
                        <label htmlFor="title">Title:
                        {errors.title && <a style={errorColor}>{errors.title.message}</a>}
                        </label>
                        <input type="text" id="title" name="title"
                          {...register("title")}                       
                        className="form-control"/>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="slug">Slug:
                        {errors.slug && <a style={errorColor}>{errors.slug.message}</a>}
                        </label>
                        <input type="text" id="slug" name="slug"
                          {...register("slug")}                       
                        className="form-control"/>
                    </div>
                    
                    <div className="form-group mb-2">
                        <button className="btn btn-primary">{cBtn}</button>
                    </div>
                </form>
            </div>
            <div className="row">
            {loading ? (<div>Loading...</div>) : <div>
                      <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Slug</th>                    
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                           categories && categories.map((category,index)=>(
                                <tr key={index}>
                                <td>{++index}</td>
                                <td>{category.title}</td>
                                <td>{category.slug}</td>
                                <td width="15%">
                                    <button onClick={()=>editCategory(category._id)}  className="btn btn-success">Edit</button>
                                    <button onClick={()=>deleteCategory(category._id)} 
                                    className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            ))
                            }
                           
                            </tbody>
                        </table>
                        
                        </div>}


            </div>
            </div>
            </div>
            </section>
            </main>
        
        </>
    )
}

export default CategoryComponent;