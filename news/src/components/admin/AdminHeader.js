import { Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import apiUrl from "../../config/apiUrl";


function AdminHeader(){
  // let token=localStorage.getItem("token") ?? "";
  // const [user,setUser]=useState({});
  // useEffect(()=>{
  //   const getUser=async ()=>{
  //     apiUrl.get("/user/loginuser",{
  //       headers:{
  //           Authorization: `Bearer ${token}`
  //       }
  //     }).then((response)=>{
  //       setUser(response.data);
  //        }).catch((err)=>{
  //       console.log(err);
  //       })
  //   }

  //   getUser();

  // },[]);

  // const logout =()=>{
  //   localStorage.clear();
  //   window.location.href="/";
  // }
  //   return (
  //       <div>
  //           <header id="header" className="header fixed-top d-flex align-items-center">
  //         <div className="d-flex align-items-center justify-content-between">
  //           <Link to="/admin" className="logo d-flex align-items-center">
  //             <img src="assets/img/logo.png" alt="" />
  //             <span className="d-none d-lg-block">Mern7am</span>
  //           </Link>
  //           <i className="bi bi-list toggle-sidebar-btn" />
  //         </div>
  //         <div className="search-bar">
  //           <form className="search-form d-flex align-items-center" method="POST" action="#">
  //             <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
  //             <button type="submit" title="Search"><i className="bi bi-search" /></button>
  //           </form>
  //         </div>
  //         <nav className="header-nav ms-auto">
  //           <ul className="d-flex align-items-center">
  //             <li className="nav-item d-block d-lg-none">
  //               <a className="nav-link nav-icon search-bar-toggle " href="#">
  //                 <i className="bi bi-search" />
  //               </a>
  //             </li>
             
  //             <li className="nav-item dropdown pe-3">
  //               <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
  //                 <img src={user.image} alt="Profile" className="rounded-circle" />
  //                 <span className="d-none d-md-block dropdown-toggle ps-2">{user.name}</span>
  //               </a>
  //               <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
  //                 <li>
  //                   <hr className="dropdown-divider" />
  //                 </li>
  //                 <li>
  //                   <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
  //                     <i className="bi bi-person" />
  //                     <span>My Profile</span>
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <hr className="dropdown-divider" />
  //                 </li>
  //                 <li>
  //                   <hr className="dropdown-divider" />
  //                 </li>
  //                 <li>
  //                   <button onClick={logout} className="dropdown-item d-flex align-items-center">
  //                     <i className="bi bi-box-arrow-right" />
  //                     <span>Sign Out</span>
  //                   </button>
  //                 </li>
  //               </ul>
  //             </li>
  //           </ul>
  //         </nav>
  //       </header>
        
  //       </div>
    let token=localStorage.getItem("token") ?? "";

    const [user,setUser]=useState({});
 
    useEffect(()=>{
      const getUser=async ()=>{
        apiUrl.get("/user/loginuser",{
          headers:{
              Authorization: `Bearer ${token}`
          }
        }).then((response)=>{
          console.log(response.data)
          setUser(response.data);
           }).catch((err)=>{
          console.log(err);
          })
      }
  
      getUser();
  
    },[]);
 
 
    return(
    
        <div className="bg-green-400 h-[10vh] flex sm:flex justify-between ">
            
            <div className="w-[10%]">
            {/* <img src={logo} className="w-[100%] my-[px] "  alt="" /> */}
            </div>
 
            <div className=" sm:text-2xl md:font-thin text-xsm">
                <h1 className="">DONATE CLOTHES SAVE LIFE</h1>
             
            </div>
 
            <div className="">
               <input type="text" className="mt-2 mr-3 md:mr-10 " placeholder="Search Items Here"/>
               <h1 className="font-mono text-xl">Welcome:{user.username}</h1>
            </div> 
 
        </div>
    )
   }

export default AdminHeader;