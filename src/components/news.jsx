import "./news.css"

import React, { Component } from 'react'

export default class news extends Component {
    render() {
        let {heading,text,img,url} = this.props;
        return (
            <>
     <div className="card">
        <img src={img} alt="Error in loading thumbnail" className="thumb" />
       <h2 className="card-title">{heading}...</h2>

       <p className="card-text">{text}...</p>

       <a href={url} target="_blank">

       <button className="read-more-btn">Read More</button>
               </a>
               </div>
             
    </>
    )
}
}