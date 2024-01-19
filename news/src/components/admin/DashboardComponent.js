import AdminAside from "./AdminAside";
import AdminHeader from "./AdminHeader";

function DashboardComponent(){
    return(
        <>
            <AdminHeader/>
            <AdminAside/>       
       
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
          </main>
        </>
    )
}

export default DashboardComponent;