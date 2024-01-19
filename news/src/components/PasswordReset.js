import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import apiUrl from '../config/apiUrl';
import Footer from "./Footer";
import Menu from "./Menu";
import { Link } from 'react-router-dom';

let registerSchema = yup.object().shape({
    email: yup.string().required().email(),

});



function PasswordReset(){
    const {register,setError, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: yupResolver(registerSchema)
    });

    const errorColor={
        color: "red"
    }

    const insertData = (data)=>{
        console.log(data);
        apiUrl.post("/login/rest-password", data).then((response)=>{
           if(response.data.notfound){
            setError("email", {
                type: "manual",
                message: response.data.notfound
            });
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
                    <h1>Password Reset</h1>
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
                    
                    <div className="form-group mb-2">
                        <button className="btn btn-primary">Reset</button>
                        <Link to="/login" className="float-end">Login</Link>
                    </div>
                </form>
            </div>
            
            <Footer/>
        </div>
    )
}

export default PasswordReset;