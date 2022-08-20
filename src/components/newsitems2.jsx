import React, { useState,useEffect } from 'react'
import Spinner from './spinner';
import Newscard from './newscard'
// import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default function Newsitems2(props) {
   let [articles,setarticles] = useState([])
   let [page,setpage] = useState(1)
   let [size,setsize] = useState(9)
   let [loading,setloading] = useState(true)
   let [totalResult,setresults] = useState(0)
   let apikey = '57ba8f15f0234927a375be0cc6c7ef55'

//    let [lan,setlang] = useState(0)
//    if (props.setlanguage) {
//        setlang(props.setlanguage)
//        setlang(0)
       
//    }
   

    //  function for update the page data
  let  update = async (change = 0) => {
        // for loading spinner 
        setloading(true)

        // for top loading bar 
        !change &&  props.setprogress(20)
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apikey}&page=${page + change}&pagesize=${size}`;
        let data = await fetch(url)
        // for top loading bar 
        !change &&  props.setprogress(50)
        let parsedData = await data.json();
        // for top loading bar 
        !change &&  props.setprogress(80)

        
            setarticles(articles.concat(parsedData.articles))
            setpage(page + change)
            setresults( parsedData.totalResults)
        
        // for top loading bar 
        !change &&  props.setprogress(100)

        // false loading spinner if all the data fetched
         setloading(false )
    }

useEffect(() => {
  update()
}, [])

   


    // function for getiing the data of next page
   let  Next = async () => {
         update(1)
    }

    // function to change in camelcase
    let camalize = (str) => {
        return (" " + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
            return chr.toUpperCase();
        });
    }


   
        return (<>
            <h4 id='Daily' className='text-center mt-4 mb-0'><strong> { camalize( props.category)} News By Love Singh</strong> </h4>
          

            <div>
                <InfiniteScroll
                    dataLength={articles}
                    next={Next}
                    // condition for showing loading bar
                    hasMore={(totalResult) > articles.length}
                    loader={<Spinner />}
                >
                    <div className='container my-1'>
                        <div className='row'>
                            {articles.map((item, index) => {
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



        </>)


    }



    //     super();
    //      state = {
    //         articles: [],
    //         loading: true,
    //         page: 1,
    //         size: 9,
    //         totalResults: "",
    //         apikey: "c98dca71ab804f59ba8e5dc5abe72ea3"
    //     }
    // }
    // let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ state.apikey}&page=${ state.page + 1}&pagesize=${ state.size}`;

    // return (<>
    //     <div className='container my-1'>
    //         <div className='row'>

    //             <h4 id='Daily' className='text-center mt-4 mb-0'><strong> Daily News By Love Singh</strong> </h4>

    //             {/* if all the data is not fetched then show the spinner */}
    //              <div className="text-center " style={{ marginTop: "5rem" }} >
    //                 { state.loading && <Spinner />}

    //             </div>
    //             {/* if all the data is fetched then only show the item of news else empty the empty the page */}
    //             { state.articles.map((item, index) => {
    //                 return (

    //                 <div key={index} className=' map-news-card col-md-4'>
    //                         <Newscard source={item.source.name} time={item.publishedAt} title={item.title} description={item.description} imageUrl={item.urlToImage} newsUrl={item.url} />
    //                     </div>

    //                 )
    //             })} 

    //         </div>
    //         {/* button component */}
    //         <div className='d-flex justify-content-between'>
    //             <button disabled={ state.page <= 1} type="button" onClick={ Previous} className="btn btn-dark">
    //                 <a style={{ textDecoration: "none", color: "white" }} href="#Daily"> &larr; Previous</a>
    //             </button>

    //             <button type="button" className="btn btn-dark">
    //                 <a style={{ textDecoration: "none", color: "white" }} href="#Daily">Go to Top</a>
    //             </button>

    //             <button disabled={(( state.page + 1) >= Math.ceil( state.totalResults / 10))} type="button" onClick={ Next} className="btn btn-dark">
    //                 <a style={{ textDecoration: "none", color: "white" }} href="#Daily" >Next &rarr;</a>
    //             </button>


    //         </div>
    //     </div>

    // </>)

