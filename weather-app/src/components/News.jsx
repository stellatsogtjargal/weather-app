import { useEffect, useState } from "react";
import './news.css' 

const News = () =>{
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=b96GqLS9OpRWCbBt0x6D2kf0exQNQEOE");
            const data = await response.json();
            setData(data);
            console.log(data);
        };
        fetchArticles();
    }, []);
    return (
        <div className="news">
            <label className="title">Today's news</label>
            {data && data.results.slice(0,5).map((item, idx) => (
                <div className="article" key = {idx}>
                    <a className="article-title" href={item.url} key = {idx}>{item.title}</a>
                    <p className="article-desc" key = {idx}>{item.abstract}</p>
                    <p className="author" key = {idx}>{item.byline}</p>
                    <img
                        className = "article-img"
                        alt = "article image" 
                        src = {item.media[0]["media-metadata"][0].url}
                    />
                </div>
            ))
        }
        </div>
    )
};
export default News;