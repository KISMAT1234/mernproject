import { Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import apiUrl from "../../config/apiUrl";


function AdminHeader(){
  let token=localStorage.getItem("token") ?? "";
  const [user,setUser]=useState({});
  useEffect(()=>{
    const getUser=async ()=>{
      apiUrl.get("/user/loginuser",{
        headers:{
            Authorization: `Bearer ${token}`
        }
      }).then((response)=>{
        setUser(response.data);
         }).catch((err)=>{
        console.log(err);
        })
    }

    getUser();

  },[]);

  const logout =()=>{
    localStorage.clear();
    window.location.href="/";
  }
    return (
        <div>
            <header id="header" className="header fixed-top d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/admin" className="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt="" />
              <span className="d-none d-lg-block">Mern7am</span>
            </Link>
            <i className="bi bi-list toggle-sidebar-btn" />
          </div>
          <div className="search-bar">
            <form className="search-form d-flex align-items-center" method="POST" action="#">
              <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
              <button type="submit" title="Search"><i className="bi bi-search" /></button>
            </form>
          </div>
          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
              <li className="nav-item d-block d-lg-none">
                <a className="nav-link nav-icon search-bar-toggle " href="#">
                  <i className="bi bi-search" />
                </a>
              </li>
             
              <li className="nav-item dropdown pe-3">
                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                  <img src={user.image} alt="Profile" className="rounded-circle" />
                  <span className="d-none d-md-block dropdown-toggle ps-2">{user.name}</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                      <i className="bi bi-person" />
                      <span>My Profile</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button onClick={logout} className="dropdown-item d-flex align-items-center">
                      <i className="bi bi-box-arrow-right" />
                      <span>Sign Out</span>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
        
        </div>
    )
}

export default AdminHeader;