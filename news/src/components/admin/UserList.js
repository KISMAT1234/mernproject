// import React,{useEffect,useState} from "react";
// import AdminAside from "./AdminAside";
// import AdminHeader from "./AdminHeader";
// import apiUrl from "../../config/apiUrl";
// import { Link } from "react-router-dom";



// function UserList(){
  
//     let token=localStorage.getItem("token") ?? "";
//     const [loading, setLoading] = useState(true);
//     const [users,setUsers]=useState({});
//     useEffect(()=>{
//       const getUser=async ()=>{
//         apiUrl.get("/user",{
//           headers:{
//               Authorization: `Bearer ${token}`
//           }
//       }).then((response)=>{
//           setUsers(response.data);
//             setLoading(false);
//       }).catch((err)=>{
//           console.log(err);
      
//       })
//       }
  
//       getUser();
  
//     },[]);
//     return(
        
//         <>
//             <AdminHeader/>
//             <AdminAside/>       
       
//         <main id="main" className="main">
//             <section className="section dashboard">
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="card">
//                     <div className="card-body">
//                       <h1 className="mt-3 mb-3" >Show Users</h1>
//                       {loading ? (<div>Loading...</div>) : <div>
//                       <table className="table table-hover">
//                             <thead>
//                             <tr>
//                                 <th>Id</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Gender</th>
//                                 <th>Image</th>
//                                 <th>Role</th>
//                                 <th>Action</th>
//                             </tr>
//                             </thead>
//                             <tbody>
//                             {
//                            users && users.map((user,index)=>(
//                                 <tr key={index}>
//                                 <td>{++index}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.gender}</td>
//                                 <td><img src={user.image} alt={user.name} width="100" /></td>
//                                 <td>{user.role}</td>
//                                 <td>
//                                     <Link to="#" className="btn btn-success btn-sm">Edit</Link>
//                                     <button className="btn btn-danger btn-sm">Delete</button>
//                                 </td>
//                             </tr>
//                             ))
//                             }
                           
                            
//                             </tbody>
//                         </table>
                        
//                         </div>}
                      
//                     </div>
//                   </div>
//                 </div>


                
              
//               </div>
//             </section>
//           </main>
//         </>
//     )
// }

// export default UserList;