import AdminAside from "./AdminAside";
import AdminHeader from "./AdminHeader";
import Rightbar from "./Rightbar";
import Centercontent from "./Centercontent";

function DashboardComponent(){
    return(
        <>
            <AdminHeader/>
    {/* <div className="grid  md:grid-cols-3 sm:grid-cols-2 gap-4"> */}
        <div className=" ">
        <AdminAside/>
        </div>
        {/* <div className="">
        <Centercontent/>
        </div> */}
        {/* <div className="">
        <Rightbar/>
        </div> */}
    {/* </div> */}
            {/* <AdminHeader/> */}
            {/* <AdminAside/>       
       
        <main id="main" className="main">
            <section className="section dashboard">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <h1>Dashboard Page</h1>
                    </div>
                  </div>
                  </div>
              
              </div>
            </section>
          </main> */}
        </>
    )
}

export default DashboardComponent;