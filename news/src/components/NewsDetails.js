import Menu from "./Menu";
import Footer from "./Footer";

function NewsDetails(){
    return (
        <div className="container">
            <Menu/>
            <h1>News Details</h1>
            <div className="card">
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">News Title</h5>
                            <p className="card-text">News Description</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NewsDetails;