import React from "react";
import "./videoItem.css"


const VideoItem = ({view}) => {

    return (
        <div className="video-item item">
            <img className="ui image" src={view.snippet.thumbnails.medium.url} />
            <div className="content">
           <div className="header">{view.snippet.title}</div>
            
            </div>
            
        </div>
    )
};


export default VideoItem
