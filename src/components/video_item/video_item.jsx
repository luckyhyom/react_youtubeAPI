import React from 'react';
import styles from './video_item.module.css';
const VideoItem = (props) =>

<div className={styles.item}>
    <img src={props.video.snippet.thumbnails.default.url}></img>
    <span >{props.video.snippet.title}</span>
</div>;

export default VideoItem;