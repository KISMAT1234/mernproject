import {Outlet} from "react-router-dom";
import React,{useEffect,useState} from "react";
import apiUrl from "../config/apiUrl";
import "../css/style.css";

function RouteMiddleware(){
    let token=localStorage.getItem("token") ?? "";
    const [isLogin,setIsLogin]=useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        apiUrl.get("/login/tokenmatch",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            if(response.data.success){
                setIsLogin(true);
                setLoading(false);
            }else{
                setIsLogin(false);
                setLoading(false);
            }
        }).catch((err)=>{
            console.log(err);
        
        })
        
    },[]);

    if(loading){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Loading...</h1>
                    </div>
                </div>
            </div>
        );
    }else{
        if(isLogin){
            return(
                <Outlet/>
            );
        }else{
            window.location.href="/";
        }
    }


}

export default RouteMiddleware;