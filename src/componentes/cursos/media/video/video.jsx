import React from 'react';
import "./video.css";

function Video({ link }) {
    return (
        <div className="contentVideo">
            <video src={link} controls loop>
            </video>
        </div>
    );
}

export default Video;