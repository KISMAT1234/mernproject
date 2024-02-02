import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Swal from 'sweetalert2'
import apiUrl from '../config/apiUrl';
import Footer from "./Footer";
import Menu from "./Menu";
import { Link } from 'react-router-dom';

let registerSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
});



function Login(){
    const {register,setError, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: yupResolver(registerSchema)
    });

    const errorColor={
        color: "red"
    }

    const insertData = (data)=>{
        
        apiUrl.post("/login", data).then((response)=>{
           if(response.data.notfound){
            setError("email", {type: "manual", message: response.data.notfound});
           }else if(response.data.incorrect){
            setError("password", {
                type: "manual",
                message: response.data.incorrect
            });
           }else{
            localStorage.setItem("token", response.data.token);
              reset();
              window.location.href="/admin";
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
                    <h1>Login To Dashboard</h1>
                </div>
            </div>
            <div className="row mb-3">
                <form action="" onSubmit={handleSubmit(insertData)}>
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
                    <div className="form-group mb-2">
                        <button className="btn btn-primary">Login</button>
                        <Link to="/password-reset">Password Reset</Link>
                        <Link to="/rigister" className="float-end">Rigister</Link>
                    </div>
                </form>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Login;