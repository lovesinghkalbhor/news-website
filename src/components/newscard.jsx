import React from 'react'


 function Newscard(props) {
  
    let {title, description,imageUrl,newsUrl, time, source} = props;

    return (<>
     
        <div   className="card " style={{boxShadow:"14px 13px 29px -20px rgba(82,82,82,1",width:"fit-content",border:"1px solid black",borderRadius:"1rem", margin:"1rem", minHeight:'40rem'}}>
        <div style={{padding:"0.5rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title" >{title}</h5>
  
            <p className="card-text" >{description ? description.slice(0,110) : null}...</p>
            <h4><span className="badge rounded-pill bg-info text-dark">{source?source:"unknown"}</span></h4>
          <p><strong>publishedAt </strong>{new Date(time).toGMTString()}</p>
            <a rel="noreferrer" target="_blank" href={newsUrl} className="btn btn-primary ">Read more</a>
          </div>
        </div>
       
        
      </> )
  }

export default Newscard;
