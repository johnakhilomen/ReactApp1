import React, {Component} from "react";

const NewsItem = ({newsitemattribute}) => 
{
           return(
                <div>
                <h4>{newsitemattribute.title}</h4>
                <p>{newsitemattribute.feed}</p>
                </div>
            );

} 

export default NewsItem;