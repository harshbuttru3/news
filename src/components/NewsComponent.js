import React, { Component } from 'react'
import NewsItem from './NewsItem'
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
    this.state = {
      articles: [],
      loading: false,   //default state is loading
      page:1 
    }
  }

  //showing contents when components did mount
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9027f572576a4d77abbcbf55998d326c&pagesize=${this.props.pageSize}`
    this.setState({loading:true})  //updating loading state to true to show spinner.
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults, loading: false});  //updating loading state again to false.

  }
    //Function on previous click
   handlePrevClick = async() =>{
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


  //Function on next click
  handleNextClick = async() =>{
    console.log("next click")
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9027f572576a4d77abbcbf55998d326c&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})  //showing spinner by setting loading state true
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false        //again setting loading state to false to stop spinner 
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
              {/* adding newsitems by mapping so that it takes all the items from parsed data */}
            <NewsItem title = {element.title} description={element.description} imgUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
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
