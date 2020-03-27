import React , {useState , useEffect } from 'react'
import axios from 'axios'
import '../css/News.css'

 function News() {

    const [news, setNews] = useState([])

    useEffect(() => {
        function fetchNewsUrl () {
            return axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2020-03-05&sortBy=publishedAt&apiKey=b13d0afb31724d0183b396f570fb6f03`)
        }

        async function fetchNews () {
        const response = await fetchNewsUrl()
        setNews(response.data.articles)
        console.log(response.data.articles)
        }

        fetchNews()
    }, [])

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h4 className="pt-5 pb-5">Latest News</h4>
                </div>
                <div className='col-xl-8 col-lg-9 col-md-12 col-sm-12 news__div'>
                    {
                        news.map(item => (
                            <div className="news-card__main">
                                <a href={item.url}>
                                    <img src={item.urlToImage} className="news-img" height="200" width="300" alt={item.title}/>
                                    <h3>{item.title}</h3>
                                    <h5>by {item.author}</h5>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className='col-xl-4 col-lg-3 col-md-12 col-sm-12 col-12' />
            </div>
        </div>  
        </>
    )
}

export default News
