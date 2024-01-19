import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Menu from "./Menu";
import Footer from './Footer';



class PageNotFound extends Component{
    render(){
        return <div className="container mt-3 mb-3">
        <Menu/>
        <h1>Page Not Found</h1>
        <p>Go to <Link to="/">Home</Link></p>
        <Footer/>
    </div>
    }
}

export default PageNotFound;