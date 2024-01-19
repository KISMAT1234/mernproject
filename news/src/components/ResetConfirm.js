import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Swal from 'sweetalert2'
import apiUrl from '../config/apiUrl';
import Footer from "./Footer";
import Menu from "./Menu";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

let registerSchema = yup.object().shape({
    password: yup.string().required(),
    password_confirmation: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match'),
});



function ResetConfirm(){
    const {token} = useParams();
    const {setValue, register, handleSubmit, Reset, formState: {errors}} = useForm({
        resolver: yupResolver(registerSchema)
    });

    const errorColor={
        color: "red"
    }

    const resetData = (data)=>{
        data.token = token;  

        apiUrl.post("/login/reset-confirm", data).then((response)=>{
              if(response.data.success){
                Swal.fire({
                    icon: "success",
                    title: response.data.message,
                    // showConfirmButton: false,
                    timer: 1500
                  });
                  Reset();

              }else{
                Swal.fire({
                    icon: "error",
                    title: response.data.error,
                    // showConfirmButton: false,
                    timer: 1500
                  });
                  

              }
           
         console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        })
        
    }
     

    return(
        <div className="container">
            <Menu/>
            <div className="row mb-3">
                <div className="col-md-12 mt-3">
                    <h1> New Password </h1>
                </div>
            </div>
            <div className="row mb-3">
                <form action="" onSubmit={handleSubmit(resetData)}>
                    
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

export default ResetConfirm;