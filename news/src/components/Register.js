import * as yup from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
// import Swal from 'sweetalert2'
import apiUrl from '../config/apiUrl';
// import Footer from "./Footer";
// import Menu from "./Menu";
import { Link } from 'react-router-dom';
import Nav from "./Navbar";
const Signupschema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
    confirmpassword: yup.string().required().oneOf([yup.ref('password'),null],'password not match'),
    gender: yup.string().required(),
  
  })
  .required();


function Register(){

    const {setValue, register,  reset,  handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(Signupschema),
      });
      
      const errorColor = {
        color:"white"
      }
    
    
    
      const unReload = (data) => {
    
        let sendData = new FormData();
        sendData.append("username", data.username);
        sendData.append("email", data.email);
        sendData.append("password", data.password);
        sendData.append("image", data.image);
        sendData.append("gender", data.gender);
    
        apiUrl.post("/user", sendData).then((response)=>{
          alert('register succesfull')
            reset();
        }).catch((err)=>{
          console.log(err);
        })
      }
    
      return(
        <>
        <Nav/>
        <div className="border-2 border-green-400 h-[120vh] w-[100%] bg-red-600 ">
        <h1 className="text-6xl text-blue-400 font-bold ml-10 mt-2 mb-5" >SIGNUP FORM</h1>
          <form onSubmit={handleSubmit(unReload)}>
            <div className="mx-10 text-2xl font-thin">
            {errors.username?.message && <a style ={errorColor}> <p>{errors.username?.message}</p></a>}
            </div>
            <input type="text" {...register("username")}  name="username" className=" mt-2 border-b-2 border-blue-900 w-[80%] text-3xl  mx-10" placeholder=" UserName " />
            <div className="mx-10 text-2xl font-thin">
            {errors.email?.message && <a style ={errorColor}> <p>{errors.email?.message}</p></a>}
            </div>
            <input type="email" {...register('email')} name="email" className=" border-b-2 border-blue-600 w-[80%] text-3xl  mx-10 mt-4" placeholder="Email"/>
            <div className="mx-10 text-2xl font-thin">
            {errors.password?.message && <a style ={errorColor}> <p>{errors.password?.message}</p></a>}
            </div>
            <input type="password" {...register("password")} name="password" className=" border-b-2 border-blue-600 w-[80%] text-3xl  mx-10 mt-4" placeholder="Password"/>
            <div className="mx-10 text-2xl font-thin">
            {errors.confirmpassword?.message && <a style ={errorColor}> <p>{errors.confirmpassword?.message}</p></a>}
            </div>
            <input type="password" {...register('confirmpassword')} name="confirmpassword" className=" border-b-2 border-blue-600 w-[80%] text-3xl  mx-10 mt-4" placeholder="Confirm Password"/>
            <input type="file" className="mx-10 mt-4 text-2xl" name="image" placeholder="profile photo" onChange={(e)=>{setValue("image", e.target.files[0])}}/>
    
            <div className="">
               <label htmlFor="gender" className="md:text-4xl text-2xl mx-10 mt-4">Gender:
                   {errors.gender && <a style={errorColor}>{errors.gender.message}</a>}
               </label> <br/>
               <label> <input type="radio" className="ml-10 mt-4 text-4xl"
                              {...register("gender")}
                              name="gender" value="male"/> Male </label>
               <label> <input type="radio"
                              {...register("gender")}
                              name="gender" value="female"/> Female </label>
             </div>
            <div className="flex justify-between">
               <button className="hover:bg-orange-600 bg-green-900  w-[30%] text-3xl mx-10 mt-4 text-amber-50"> Signup </button>
               <Link to="/login">
               <button className="hover:bg-orange-600 bg-green-900  w-[70%] text-3xl mr-40 text-amber-50  mt-4"> Login </button>
               </Link>
             </div>      
          </form>
          
        </div>
        </>
    )
}

export default Register;
    // const {setValue, register, setError, handleSubmit, reset, formState: {errors}} = useForm({
    //     resolver: yupResolver(registerSchema)
    // });

    // const errorColor={
    //     color: "red"
    // }

    // const insertData = (data)=>{
    //     let sendData = new FormData();
    //     sendData.append("name", data.name);
    //     sendData.append("email", data.email);
    //     sendData.append("password", data.password);
    //     sendData.append("gender", data.gender);
    //     sendData.append("image", data.image);

        
    //     apiUrl.post("/user", sendData).then((response)=>{
    //        if(response.data.success){
    //         Swal.fire({
    //             icon: "success",
    //             title: response.data.message,
    //             // showConfirmButton: false,
    //             timer: 1500
    //           });
    //           reset();
    //        }else{
    //         console.log(response.data);
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
    //                 <h1>Create New Account</h1>
    //             </div>
    //         </div>
    //         <div className="row mb-3">
    //             <form action="" onSubmit={handleSubmit(insertData)}>
    //                 <div className="form-group mb-2">
    //                     <label htmlFor="name">Name:
    //                     {errors.name && <a style={errorColor}>{errors.name.message}</a>}
    //                     </label>
    //                     <input type="text" id="name" name="name"
    //                       {...register("name")}                       
    //                     className="form-control"/>
    //                 </div>
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
    //                 <div className="form-group mb-3">
    //                                 <label htmlFor="password_confirmation">Password Confirmation:
    //                                     {errors.password_confirmation &&
    //                                         <a style={errorColor}>{errors.password_confirmation.message}</a>}
    //                                 </label>
    //                                 <input type="password"
    //                                        {...register("password_confirmation")}
    //                                        name="password_confirmation" id="password_confirmation"
    //                                        className="form-control"/>
    //                 </div>
    //                 <div className="form-group mb-3">
    //                                 <label htmlFor="gender">Gender:
    //                                     {errors.gender && <a style={errorColor}>{errors.gender.message}</a>}
    //                                 </label> <br/>
    //                                 <label> <input type="radio"
    //                                                {...register("gender")}
    //                                                name="gender" value="male"/> Male </label>
    //                                 <label> <input type="radio"
    //                                                {...register("gender")}
    //                                                name="gender" value="female"/> Female </label>
    //                 </div>
    //                 <div className="form-group mb-3">
    //                                 <label htmlFor="image">Image:
    //                                 </label>
    //                                 <input type="file" name="image"
    //                                        onChange={(e) => {
    //                                            setValue("image", e.target.files[0])
    //                                        }}
    //                                        id="image" className="form-control"/>
    //                 </div>
    //                 <div className="form-group mb-2">
    //                     <button className="btn btn-primary">Register</button>
    //                     <Link to="/login" className="float-end">Login</Link>
    //                 </div>
    //             </form>
    //         </div>
            
    //         <Footer/>
    //     </div>
    
