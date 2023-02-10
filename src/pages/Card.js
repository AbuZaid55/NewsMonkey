// //News api with category and country and pageno and pageSize and footer next periveous button 
// import React ,{useEffect, useState} from 'react'
// import LoadingBar from 'react-top-loading-bar'
// function Card(props) {
//         const [news , setNews]=useState(null)
//         const [progress, setProgress] = useState(0)
//         const fetchNews = async ()=>{
//              setProgress(20)
//             let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${props.page}&pageSize=${props.pagesize}`
//             setProgress(30)
//             let resp = await fetch(url)
//             setProgress(70)
//             let data = await resp.json()
//             setProgress(85)
//             props.settotalarticles(data.totalResults)
//             setNews(data.articles)
//             setProgress(100)
//             }
//         useEffect(()=>{
//                 fetchNews()
//         },[props.country,props.category,props.page,props.pagesize])
//     return (<>
//       <LoadingBar color='#ff0000' progress={progress} onLoaderFinished={() => setProgress(0)}/>
//       <div className="d-flex flex-wrap align-items-center justify-content-center my-5 mx-md-5"> {!(news===null) && news.map((element,i)=>{
//         return <div key={i} className='text-dark p-2 rounded-2' style={{minWidth:'300px',maxWidth:'300px',height:'585px',margin:'30px 20px',backgroundColor:'rgb(220, 219, 219)'}}>
//                     <div style={{height:'300px',width:'100%',overflow:'hidden'}}><img  height="300px" width="100%" src={!(element.urlToImage===null)?element.urlToImage:'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=8'} className="card-img-top rounded-2" alt="../newsImage"/></div>
//                     <div className="card-body">
//                         <div className='text-end'><span className="badge rounded-pill bg-danger">{element.source.name}</span></div>
//                         <h5 className="card-title m-2" id="cardtitle">{!(element.title===null)?(element.title).slice(0,15)+'...':'Title..'}</h5>
//                         <p className="card-text m-2" id="carddescription">{!(element.description===null)?(element.description)+'...':'Null Desctiption..'}</p>
//                         <p className="card-text m-2" id="cardauthor">{!(element.author===null)?'Author: '+(element.author):'Author: Unknown'}</p>
//                         <p className="card-text m-2 fst-italic fw-semibold">{(element.publishedAt)}</p>
//                         <a target='_blank'rel="noopener"  href={element.url} className="btn btn-dark">Read More</a>
//                     </div>
//                 </div>
//             })}
//     </div>
//     </>);
//   }


// export default Card;

// ====================================================================================================================================================================================
// //Reapid Api with spinner and toplodingbar  and without any props and filter
import React, { useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './spinner.js'
function Card(){
    let [news,setNews]=useState([])

    async function fetchData(){
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
          'X-RapidAPI-Host': process.env.REACT_APP_X_RapidAPI_Host
        }
      };
      let resp = await fetch(process.env.REACT_APP_API_KEY_URL, options)
      let data = await resp.json()
      if(news===[]){
        setNews(data)
      }else{
        setNews(news.concat(data))
      }
    }
    useEffect(()=>{
      fetchData()
    })


    function fetchMoreData (){
        fetchData()
    };

    return (<>
        <InfiniteScroll dataLength={news.length} next={fetchMoreData} hasMore={true} loader={<Spinner/>}>
          <div className="d-flex flex-wrap align-items-center justify-content-center my-5 mx-md-5"> {(news!==[]) && news.map((element,i)=>{
                return <div key={i} className='text-dark p-2 rounded-2' style={{minWidth:'300px',maxWidth:'300px',height:'585px',margin:'30px 20px',backgroundColor:'rgb(220, 219, 219)'}}>
                            <div style={{height:'300px',width:'100%',overflow:'hidden'}}><img  height="300px" width="100%" src='https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=8' className="card-img-top rounded-2" alt="../newsImage"/></div>
                            <div className="card-body">
                                <div className='text-end'><span className="badge rounded-pill bg-danger">{element.source}</span></div>
                                <h5 className="card-title m-2" id="cardtitle">{!(element.title===null)?(element.title).slice(0,15)+'...':'Title..'}</h5>
                                <p className="card-text m-2" id="carddescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt minus nulla commodi quae esse corrupti assumenda, omnis voluptatem molestias iure?</p>
                                <p className="card-text m-2" id="cardauthor">Author: Unknown</p>
                                <p className="card-text m-2 fst-italic fw-semibold">Time: 01/01/2023</p>
                                <a target='_blank' rel="noreferrer"  href={element.url} className="btn btn-dark">Read More</a>
                            </div>
                        </div>
                    })}
            </div>
        </InfiniteScroll>
  </>);
  }




export default Card;