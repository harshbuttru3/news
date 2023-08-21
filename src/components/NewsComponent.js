import React, { Component } from 'react'
import NavItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export default class NewsComponent extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){
    super();
    // console.log("Hello, Hello i am a constructor for newsitem")
    this.state = {
      articles: [],
      loading: false,
      page:1 
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9027f572576a4d77abbcbf55998d326c&pagesize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults, loading: false});

  }

   handlePrevClick = async() =>{
    // console.log("prev click")

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9027f572576a4d77abbcbf55998d326c&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
    
  };

  handleNextClick = async() =>{
    console.log("next click")
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9027f572576a4d77abbcbf55998d326c&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })
  }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>News Monkey- Top HeadLines.</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
           {!this.state.loading && this.state.articles.map((element)=>{
            return  <div className="col-md-4">
            <NavItem title = {element.title} description={element.description} imgUrl={element.urlToImage} url={element.url}/>
            </div>
           })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}
