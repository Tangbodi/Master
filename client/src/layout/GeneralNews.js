import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

const BASE_URL="https://stocknewsapi.com/api/v1?tickers=AMZN&items=3&page=1&token=";
const API_KEY="i30sdvayryyn84ns28y86hlkfolu86nc84oydwua";
function GeneralNews() {
    const[News,setNews] = useState([]);
    const[Title,setTitle] = useState('');
    const[Img,setImg] = useState('');
    const[Path,setPath] = useState('');
    let navigate = useNavigate(); 

    const getNewsData = async ()=>{
        try{
            const res = await axios.get(`${BASE_URL}${API_KEY}`);
            setNews(res.data);
        } catch(err){
            console.log(err);
        }
        var arrstr = JSON.parse(JSON.stringify(News));
        var title = arrstr.data[0].title
        var image_url = arrstr.data[0].image_url
        var news_url = arrstr.data[0].news_url
       console.log(news_url)
        setTitle(title)
        setImg(image_url)
        setPath(news_url)
    }
    useEffect(()=>{
        getNewsData();
    })
    const openInNewTab=()=>{
        let path = 'https://www.google.com/'
        navigate(path)
    }

  return (
    <div>GeneralNews
        <div onSubmit={(e) => openInNewTab(e)}>
        <article>
       presss
        </article>
        </div>
    </div>
  )
}

export default GeneralNews