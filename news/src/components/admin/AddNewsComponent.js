import React,{useEffect,useState} from 'react';
import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Swal from 'sweetalert2'
import AdminAside from "./AdminAside";
import AdminHeader from "./AdminHeader";
import apiUrl from "../../config/apiUrl";

let newsSchema = yup.object().shape({
    category_id: yup.string().required(),
    title: yup.string().required(),
    slug: yup.string().required(),
    description: yup.string().required()
});



function AddNewsComponent(){
    const {setValue, register, setError, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: yupResolver(newsSchema)
    });
    const [loading, setLoading] = useState(true);
    const [categories,setCategories]=useState({});
    
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
        let sendData = new FormData();
        sendData.append("category_id", data.category_id);
        sendData.append("title", data.title);
        sendData.append("slug", data.slug);
        sendData.append("description", data.description);
        sendData.append("image", data.image);
        sendData.append("meta_title", data.meta_title);
        sendData.append("meta_description", data.meta_description);
        
            apiUrl.post("/news", sendData).then((response)=>{
            if(response.data.success){
               
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
                    <h1>Add News</h1>
                </div>
            </div>
            <div className="row mb-3">
                <form action="" onSubmit={handleSubmit(insertData)}>

                {loading ? (<div>Loading...</div>) 
                : <div>
                      <div className="form-group mb-2">
                        <label htmlFor="category_id">Category:
                        {errors.category_id && <a style={errorColor}>{errors.category_id.message}</a>}
                        </label>
                        <select name="category_id" id="category_id"
                            {...register("category_id")}
                        className="form-control">
                            <option value="">Select Category</option>
                            {categories.map((category)=>{
                                return(
                                    <option value={category._id}>{category.title}</option>
                                )
                            }
                            )}
                        </select>           
                        
                        </div>
                
                  </div>
                }

                    
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
                    <div className="form-group mb-3">
                                    <label htmlFor="image">Image:
                                    </label>
                                    <input type="file" name="image"
                                           onChange={(e) => {
                                               setValue("image", e.target.files[0])
                                           }}
                                           id="image" className="form-control"/>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="description">Description:
                        {errors.description && <a style={errorColor}>{errors.description.message}</a>}
                        </label>
                        <textarea id="description" name="description"
                          {...register("description")}                       
                        className="form-control"></textarea>
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="meta_title">Meta Title:
                        {errors.meta_title && <a style={errorColor}>{errors.meta_title.message}</a>}
                        </label>
                        <input type="text" id="meta_title" name="meta_title"
                          {...register("meta_title")}                       
                        className="form-control"/>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="meta_description">Meta Description:
                        {errors.meta_description && <a style={errorColor}>{errors.meta_description.message}</a>}
                        </label>
                        <input type="text" id="meta_description" name="meta_description"
                          {...register("meta_description")}                       
                        className="form-control"/>
                    </div>
                    
                    <div className="form-group mb-2">
                        <button className="btn btn-primary">Add News</button>
                    </div>
                </form>
            </div>
           
            </div>
            </div>
            </section>
            </main>
        
        </>
    )
}

export default AddNewsComponent;