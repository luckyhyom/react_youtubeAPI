import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = (props) => {

return  <ul>{props.videos.map((video) =>
      { return <VideoItem key={video.id.videoId||video.id.channelId||video.id.playlistId} video={video}/>})}</ul>
    ;

};

export default VideoList;