import React, {Component} from "react";
import NewsItem from "../components/news_list_item";

class NewsList extends Component
{
    constructor(props) {
        super(props);
        console.log(this.props);
      }

    render()
    {
        const newsListLooped = this.props.newslistattribute.map((item) => {
        console.log(item.title);
        return(
            /*<div>
<h4>{item.title}</h4>
<p>{item.feed}</p>
            </div>*/
            <NewsItem key={item.id} newsitemattribute={item} />
                
        );
        });

        return(
        //<h1>Title of first array from props newlistattribute: {this.props.newslistattribute[0].title}</h1>
        newsListLooped
        );

    }
}

export default NewsList;