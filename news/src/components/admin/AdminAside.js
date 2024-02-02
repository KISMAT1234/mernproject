import { Link } from "react-router-dom";
function AdminAside(){
    return(
        <> 
         {/* <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <Link className="nav-link " to="/admin">
                <i className="bi bi-grid" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="#">
                <i className="bi bi-person-square" /><span>Users</span><i className="bi bi-chevron-down ms-auto" />
              </Link>
              <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                  <Link to="/admin/users">
                    <i className="bi bi-circle" /><span>Show</span>
                  </Link>
                </li>
                
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link collapsed" data-bs-target="#components-news" data-bs-toggle="collapse" to="#">
                <i className="bi bi-newspaper" /><span>News</span><i className="bi bi-chevron-down ms-auto" />
              </Link>
              <ul id="components-news" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                  <Link to="/admin/manage-category">
                    <i className="bi bi-circle" /><span>Manage Category</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/add-news">
                    <i className="bi bi-circle" /><span>Add News</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="bi bi-circle" /><span>Show News</span>
                  </Link>
                </li>
                
              </ul>
            </li>
        
          </ul>
        </aside> */}


     <div className=" rounded-2xl sm:absolute md:w-[15%] border-2 mt-[20px]  border-red-500 h-[8vh] md:h-[80vh] justify-between flex md:block">
        <div className="sm:mx-[5%] my-3 sm:text-4xl sm:mt-5px font-bold text-xl hover:text-blue-900">
           <button>
              <Link to ="/admin">Content</Link>
           </button>
        </div>
            <div className="sm:mx-[5%] my-3 sm:text-4xl sm:mt-5px font-bold text-xl hover:text-blue-900">
             <button>
               <Link to ="/">Items</Link>
            </button>
        </div>

        <div className="sm:mx-[5%] text-green-500 my-3 sm:text-4xl sm:mt-5px font-bold text-xl">
           <button>
             <Link to ="/admin/upload-content" clasnmae="">Upload</Link>
           </button>
        </div>

        <div className="sm:mx-[5%] my-3 sm:text-4xl sm:mt-5px font-bold text-xl hover:text-blue-900">
            <button>
               <Link to ="/admin/members-list">Member</Link>
            </button>
        </div>
        <div className="sm:mx-[5%] md:hidden my-3 sm:text-4xl sm:mt-5px font-bold text-xl hover:text-blue-900">
            <button>
               <Link to ="/">Rightbar</Link>
            </button>
        </div>
         
      </div>

        </>
        
        )
}

export default AdminAside;