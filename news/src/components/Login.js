import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Swal from 'sweetalert2'
import apiUrl from '../config/apiUrl';
import Footer from "./Footer";
import Menu from "./Menu";
import { Link } from 'react-router-dom';
import Nav from "./Navbar";


const Signupschema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
  }).required();



function Login(){

    const { register,setError,reset, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(Signupschema),
      });
      
      const errorColor = {
        color:"white"
      }
    
      const unReload = (data) => {
        apiUrl.post("/login", data).then((response)=>{
          if(response.data.notfound){
            setError("email", {type: "manual", message: response.data.notfound});
          }
          else if(response.data.incorrect){
              setError("password", {type: "manual", message: response.data.incorrect});
          } 
          else{
                localStorage.setItem("token", response.data.token);
               reset();
               window.location.href="/Mainpage";
           }
         }).catch((err)=>{
          console.log(err);
        })

      }
    return (
        <>
        <Nav/>
        <form onSubmit={handleSubmit(unReload)}>
            <div className="border-4 border-red-400 w-[90%] h-[90vh] mx-[10px] my-[20px] rounded-2xl bg-yellow-300">
               <h1 className="text-center text-6xl font-bold">Login Form</h1><br></br>
               <label htmlFor="email" className="text-2xl md:text-4xl mx-[2%] ">Email: 
               {errors.email?.message && <a style ={errorColor}> {errors.email?.message}</a>}
               </label><br></br>
               <input type="email" name="email" {...register("email")} className="h-[7vh] w-[70%] rounded-xl text-2xl mx-[2%] my-[2%]"/><br></br>
               <label htmlFor="password" className="text-2xl md:text-4xl mx-[2%] my-[]">Password:
               {errors.password?.message && <a style ={errorColor}> {errors.password?.message}</a>}
               </label><br></br>
               <input type="password" {...register("password")} name="password" className="h-[7vh] w-[70%] rounded-xl text-2xl mx-[2%] my-[2px]"/><br></br>
               <button className="border-4 border-orange-600 h-[10vh] w-[70%] mx-[2%] mt-[6%] text-4xl  rounded-4xl hover:bg-orange-600">Login</button>
              <Link to= "/register">
               <button className="border-4 border-orange-600 h-[10vh] w-[70%] mx-[2%] mt-[6%] text-4xl  rounded-4xl hover:bg-orange-600">Signup</button>
              </Link>
            </div>
        </form>
        </>
    )
}

export default Login;






    // const {register,setError, handleSubmit, reset, formState: {errors}} = useForm({
    //     resolver: yupResolver(registerSchema)
    // });

    // const errorColor={
    //     color: "red"
    // }

    // const insertData = (data)=>{
        
    //     apiUrl.post("/login", data).then((response)=>{
    //        if(response.data.notfound){
    //         setError("email", {type: "manual", message: response.data.notfound});
    //        }else if(response.data.incorrect){
    //         setError("password", {
    //             type: "manual",
    //             message: response.data.incorrect
    //         });
    //        }else{
    //         localStorage.setItem("token", response.data.token);
    //           reset();
    //           window.location.href="/admin";
    //        }
         
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
        
    // }
     

    // return(
    //     <div className="container">
    //         <Menu/>
    //         <div className="row mb-3">
    //             <div className="col-md-12 mt-3">
    //                 <h1>Login To Dashboard</h1>
    //             </div>
    //         </div>
    //         <div className="row mb-3">
    //             <form action="" onSubmit={handleSubmit(insertData)}>
    //                 <div className="form-group mb-2">
    //                     <label htmlFor="email">Email:
    //                     {errors.email && <a style={errorColor}>{errors.email.message}</a>}
    //                     </label>
    //                     <input type="email" id="email" name="email"
    //                      {...register("email")}  
    //                     className="form-control"/>
    //                 </div>
    //                 <div className="form-group mb-3">
    //                                 <label htmlFor="password">Password:
    //                                     {errors.password && <a style={errorColor}>{errors.password.message}</a>}
    //                                 </label>
    //                                 <input type="password" name="password"
    //                                        {...register("password")}
    //                                        id="password" className="form-control"/>
    //                 </div>
    //                 <div className="form-group mb-2">
    //                     <button className="btn btn-primary">Login</button>
    //                     <Link to="/password-reset">Password Reset</Link>
    //                     <Link to="/rigister" className="float-end">Rigister</Link>
    //                 </div>
    //             </form>
    //         </div>
            
    //         <Footer/>
    //     </div>
    // )
