import Menu from "./Menu";
import Footer from "./Footer";
import React, {useEffect, useState} from 'react';
import apiUrl from '../config/apiUrl';
import {useParams} from "react-router-dom";
function NewsDetails(){

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const getNews= () => {
       apiUrl.get(`/news/${id}`).then((response)=>{
            setNews(response.data);
            setLoading(false);
       }).catch((err)=>{
        console.log(err);
       })
    }

    useEffect(()=>{
        getNews();
    }, []);


    return (
        <div className="container">
            <Menu/>
            <div className="card">
                        <img src="https://picsum.photos/200/100" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{news.title}</h5>
                            <img src={news.image} alt = {news.title}/>
                            <p className="card-text">{news.description}</p>
                        </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NewsDetails;