import React, { Component } from 'react'

export default class extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;

    return (
        <div className="card my-3 mx-2 glass">
        <img src={imageUrl?imageUrl:'https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM='} className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title" style={{fontWeight:'bold'}}>{title}</h5>
            <p className="card-text">{description}</p>
            <p><span className="badge rounded-pill text-bg-danger">{source}</span></p>
            <p className="card-text" style={{color:'darkgreen'}}><small className="text">By {!author?"Unknown": author} on {new Date (date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' className="btn btn-sm" style={{backgroundColor:'#003399',color:'white'}}>Read Article</a>
        </div>
        </div>
    
    )
  }
}
