import React from "react";
import newsStyle from './news.module.css'
import NewsPosts from "./NewsPosts/NewsPosts";

const News = () =>{
    return(<div className={newsStyle.content}>
    <div>
        <div className={newsStyle.newsContent}>Новини дня</div>
            <NewsPosts/>
            <NewsPosts/>
            <NewsPosts/>
            <NewsPosts/>
    </div>
        </div>



    );
}
export default News;