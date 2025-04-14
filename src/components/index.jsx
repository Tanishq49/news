import "./indexNew.css";
import Navbar from "./navbar";
import News from "./news";
import React, { Component } from 'react'
import Loader from "./spinner";
import PropTypes from 'prop-types'

export default class index extends Component{
    static defaultProps={
        country: 'us',
        category: 'sports',
    }
    static propTypes={
        country: PropTypes.string,
        category: PropTypes.string,
    }
    articles=[]
    constructor(){
        super();
        this.state={
            articles: this.articles,
            loading: false,
            page: 1,
        }
    }
    async componentDidMount(){
        let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9214e2dfdd24be090d1743063644347&page=1&pageSize=9`;
        let data = await fetch(api);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
        })
    }
    back = async() =>{
        let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9214e2dfdd24be090d1743063644347&page=${this.state.page- 1}&pageSize=9`;
        this.setState({
            loading: true,
        })
        let data = await fetch(api);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles,
            loading: false,
        })
    }
    next = async()=>{
        if(this.state.page+1 > Math.ceil(this.state.totalResults/9)){
            
        }
        else{
        let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9214e2dfdd24be090d1743063644347&page=${this.state.page+ 1}&pageSize=9`;
        this.setState({
            loading: true,
        })
        let data = await fetch(api);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page+1,
            articles: parsedData.articles,
            loading: false,
        })}
    }
    render(){
    document.title="NewsMonkey-Get Daily News";
    return(
        <>
        {this.state.loading && <Loader />}
           <Navbar />
           <h1 className="head">NewsMonkey-Top Headlines</h1>
        <div className="cardWrap">
           {this.state.articles.map((element)=>{
            return(
                <div className="container-card" key={element.url}>
               <News heading={element.title?element.title.slice(0,22):" "} text={element.description?element.description.slice(0,100):" "} img={element.urlToImage} url={element.url}/>
               </div>
            );
           })}
           </div>
           <button disabled={this.state.page<1} className="prev" onClick={this.back}>&larr;Previous</button>
           <button className="next" onClick={this.next}>Next&rarr;</button>
        </>
    );
}
}

// b9214e2dfdd24be090d1743063644347