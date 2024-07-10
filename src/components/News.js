import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading:false,
      page:1,
      totalResults:0
    }
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5a6f7f48200d4332ad01d4da48d8a42f

&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
    })
  }
  
  async componentDidMount(){
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5a6f7f48200d4332ad01d4da48d8a42f
    &page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
    })
  }

  render() {
    return (
      <>
      <div className='container c1'>
        <p className='text-center'><span style={{fontSize:'50px',fontFamily:'times new roman',color:'grey'}}>Top Headlines</span></p>
        <hr></hr>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          
          <div className='row'>
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>;
            })}
          </div>
        </InfiniteScroll>
        </div>

      </>
    )
  }
}