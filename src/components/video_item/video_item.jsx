import React from 'react';
import styles from './video_item.module.css';
const VideoItem = (props) =>

<a className={styles.item} href>
    <img src={props.video.snippet.thumbnails.default.url}></img>
    <span >{props.video.snippet.title}</span>
</a>;

export default VideoItem;