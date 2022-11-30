import React, { useState } from 'react';
import axios from 'axios';



const News = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
   const response= await axios.get("https://newsdata.io/api/1/news?apikey=pub_140219a96ed932f0a2645c48a19d915982833")
   

        setNews(response.data.results)
        console.log(response)
      
  }


  return (
    <>
      <button onClick={fetchNews} type="button" className="btn btn-primary" style={{ marginTop: "20px", marginLeft: "50vw",marginBottom:"20px" }}>GET News</button>

      <div className='container'>
        <div className='row'>
          {news.map((value) => {
            return (
              <div className='col-4'>
              <div className="card" style={{ width: "18rem" }}>
                <img src={value.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description}</p>
                  <a href="#" className="btn btn-primary">{value.link}</a>
                </div>
              </div>
              </div>
            )
          })}
          </div>
        </div>



      </>
      )
}

      export default News
