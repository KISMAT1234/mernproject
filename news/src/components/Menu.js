import { Link } from "react-router-dom";
import Nav from "./Navbar";
import image from "./image/center.jpg"


function Menu(){
    return <>
    {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Mern7am</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav> */}
<Nav/>
<div>
    <div>
        <div className="sm:pl-[10%]">
          <img src={image} classsName=" w-[100%] h-[70vh]"  alt="" />
         </div>
       <hr></hr>
        <Link to="/register">
       <button className="hover:bg-orange-600 bg-green-900  w-[70%] h-[10vh] text-3xl text-amber-50 mx-10 mt-4">Signup</button><br></br>
        </Link>
        <Link to ="/login">
       <button className="hover:bg-orange-600 bg-green-900  w-[70%] h-[10vh] text-3xl text-amber-50 mx-10 mt-4 ">Login</button>
       </Link>
    </div>
    <hr></hr>
    <div className="bg-teal-600 hover:bg-violet-600 hover:text-slate-300 sm:h-[100vh] mt-[20px] sm:pt-[95px]">
       <h1 className=" font-bold text-6xl sm:text-9xl text-center ">DONATE ANYTHING<br></br> FOR POOR <br></br> PEOPLE </h1>
    </div>
    <hr></hr>
      
      <div className="mt-10">
           <iframe width="1255" height="700" src="https://www.youtube.com/embed/TfY-VdwUwoA" title="Renters inside and homeless outside shiver in subzero temperatures" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>



</div>
    
    
    </>
}
export default Menu;
