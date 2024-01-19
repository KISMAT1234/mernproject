import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
function News(){
    return (
        <div className="container">
            <Menu/>
            <div className="row">
                <div className="col-md-12">
                    <h1>News List</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">News Title</h5>
                            <p className="card-text">News Description</p>
                            <Link to="/news-details/1" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">News Title</h5>
                            <p className="card-text">News Description</p>
                            <Link to="/news-details/1" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">News Title</h5>
                            <p className="card-text">News Description</p>
                            <Link to="/news-details/1" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">News Title</h5>
                            <p className="card-text">News Description</p>
                            <Link to="/news-details/1" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">News Title</h5>
                            <p className="card-text">News Description</p>
                            <Link to="/news-details/1" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">News Title</h5>
                            <p className="card-text">News Description</p>
                            <Link to="/news-details/1" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>

                </div>
                
            </div> 
            <Footer/>           
        </div>
    
    )
}

export default News;