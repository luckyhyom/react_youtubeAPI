import React from 'react';
import Video from './video';

const MostPopular = (props) => {



    return  <>
        {props.vidoes.map(video =>{
            return <Video video={video}/>
        })}</>
    ;

};

export default MostPopular;