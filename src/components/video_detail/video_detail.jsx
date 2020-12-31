import React from 'react';

const VideoDetail = ({video}) => (
     <section>
<iframe id="ytplayer" type="text/html" width="720" height="405"
title="youtube video item"
src={`https://www.youtube.com/embed/${video.id.videoId||video.id.channelId||video.id.playlistId}`}
frameBorder="0" allowFullScreen></iframe>
     </section> 
    );

export default VideoDetail;