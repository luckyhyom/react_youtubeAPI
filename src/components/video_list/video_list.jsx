import React from 'react';
import VideoItem from '../video_item/video_item';
import style from './video_list.module.css';
const VideoList = ({videos,onVideoClick,display}) => {



return  <ul className={style.video_list}>{ videos.map((video) =>
      { return <VideoItem key={video.id.videoId||video.id.channelId||video.id.playlistId}
               video={video}
               onVideoClick={onVideoClick} display={display}/>
    })
    }</ul>
    ;

};

export default VideoList;