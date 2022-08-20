import React, { Component } from 'react'
import Spinner from './spinner';
import Newscard from './newscard'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class Newsitems extends Component {
    static defaultProps = {

        category: '',
        country: "in"
    }
    static propTypes = {

        category: PropTypes.string,
        country: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            size: 9,
            totalResults: 0,
            apikey: "c98dca71ab804f59ba8e5dc5abe72ea3"
        }
    }

    async componentDidMount() {
        console.log("cdm");
        this.props.setprogress(20)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page + 1}&pagesize=${this.state.size}`;
        let data = await fetch(url);
        this.props.setprogress(50)

        let parsedData = await data.json()
        this.props.setprogress(90)

        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
        this.props.setprogress(100)

    }

    Next = async () => {

        console.log("Next called");
        console.log(this.state.totalResults);
        console.log("fetched pages ", ((this.state.page) * (this.state.size)) + (this.state.size))

        this.setState({
            page: this.state.page + 1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page + 1}&pagesize=${this.state.size}`;
        let data = await fetch(url);
        let parsedData = await data.json()

        console.log(parsedData.articles);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false
        })

        console.log(this.state.page);




    }


    render() {
        return (<>

            <h4 id='Daily' className='text-center mt-4 mb-0'><strong> Daily News By Love Singh</strong> </h4>

            <div>
                <InfiniteScroll
                    dataLength={this.state.articles}
                    next={this.Next}
                    // condition for showing loading bar
                    hasMore={(((this.state.page) * (this.state.size)) < this.state.totalResults) ? true : false}
                    loader={<Spinner />}
                >
                    <div className='container my-1'>
                        <div className='row'>
                            {this.state.articles.map((item, index) => {
                                return (

                                    <div key={index} className=' map-news-card col-md-4'>
                                        <Newscard source={item.source.name} time={item.publishedAt} title={item.title} description={item.description} imageUrl={item.urlToImage} newsUrl={item.url} />
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </div>
            {/* button component */}
            <div className='d-flex justify-content-between'>
                {/* <button disabled={this.state.page <= 1} type="button" onClick={this.Previous} className="btn btn-dark">
                    <a style={{ textDecoration: "none", color: "white" }} href="#Daily"> &larr; Previous</a>
                </button>

                <button type="button" className="btn btn-dark">
                    <a style={{ textDecoration: "none", color: "white" }} href="#Daily">Go to Top</a>
                </button>

                <button type="button" onClick={this.Next} className="btn btn-dark">
                    <a style={{ textDecoration: "none", color: "white" }} href="#Daily" >Next &rarr;</a>
                </button> */}


            </div>

        </>)


    }

}
