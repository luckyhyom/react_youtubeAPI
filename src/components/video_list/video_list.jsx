import React from 'react';
import VideoItem from '../video_item/video_item';
import style from './video_list.module.css';
const VideoList = (props) => {

return  <ul className={style.video_list}>{props.videos.map((video) =>
      { return <VideoItem key={video.id.videoId||video.id.channelId||video.id.playlistId} video={video}/>})}</ul>
    ;

};

export default VideoList;