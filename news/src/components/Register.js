import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Swal from 'sweetalert2'
import apiUrl from '../config/apiUrl';
import Footer from "./Footer";
import Menu from "./Menu";
import { Link } from 'react-router-dom';

let registerSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
    password_confirmation: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match'),
    gender: yup.string().required(),
});



function Register(){
    const {setValue, register, setError, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: yupResolver(registerSchema)
    });

    const errorColor={
        color: "red"
    }

    const insertData = (data)=>{
        let sendData = new FormData();
        sendData.append("name", data.name);
        sendData.append("email", data.email);
        sendData.append("password", data.password);
        sendData.append("gender", data.gender);
        sendData.append("image", data.image);

        
        apiUrl.post("/user", sendData).then((response)=>{
           if(response.data.success){
            Swal.fire({
                icon: "success",
                title: response.data.message,
                // showConfirmButton: false,
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
        <div className="container">
            <Menu/>
            <div className="row mb-3">
                <div className="col-md-12 mt-3">
                    <h1>Create New Account</h1>
                </div>
            </div>
            <div className="row mb-3">
                <form action="" onSubmit={handleSubmit(insertData)}>
                    <div className="form-group mb-2">
                        <label htmlFor="name">Name:
                        {errors.name && <a style={errorColor}>{errors.name.message}</a>}
                        </label>
                        <input type="text" id="name" name="name"
                          {...register("name")}                       
                        className="form-control"/>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="email">Email:
                        {errors.email && <a style={errorColor}>{errors.email.message}</a>}
                        </label>
                        <input type="email" id="email" name="email"
                         {...register("email")}  
                        className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                                    <label htmlFor="password">Password:
                                        {errors.password && <a style={errorColor}>{errors.password.message}</a>}
                                    </label>
                                    <input type="password" name="password"
                                           {...register("password")}
                                           id="password" className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                                    <label htmlFor="password_confirmation">Password Confirmation:
                                        {errors.password_confirmation &&
                                            <a style={errorColor}>{errors.password_confirmation.message}</a>}
                                    </label>
                                    <input type="password"
                                           {...register("password_confirmation")}
                                           name="password_confirmation" id="password_confirmation"
                                           className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                                    <label htmlFor="gender">Gender:
                                        {errors.gender && <a style={errorColor}>{errors.gender.message}</a>}
                                    </label> <br/>
                                    <label> <input type="radio"
                                                   {...register("gender")}
                                                   name="gender" value="male"/> Male </label>
                                    <label> <input type="radio"
                                                   {...register("gender")}
                                                   name="gender" value="female"/> Female </label>
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
                        <button className="btn btn-primary">Register</button>
                        <Link to="/login" className="float-end">Login</Link>
                    </div>
                </form>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Register;