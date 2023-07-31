"use client"
import React, { useRef } from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ( {height, width, url}) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.internalPlayer.playVideo();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.internalPlayer.pauseVideo();
    }
  };

  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <YouTube
      className='rounded flex items-center justify-center w-full m-0 p-0'
        videoId={url}
        opts={opts}
        ref={videoRef}
      />
    </div>
  );
};

export default YouTubePlayer;
