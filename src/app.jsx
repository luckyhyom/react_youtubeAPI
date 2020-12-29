import React from "react";
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import "./app.css";
import Navbar from './components/navbar';
import VideoList from './components/video_list/video_list';

const App = ({youtube}) => {
  const [videos, setVideos] = useState([]);
  // 자식요소가 이곳에 보내주고싶은 데이터가 있다,
  // 그럼 이곳에서 자식에게 매개체를 제공해야한다. 그게 바로 함수다. 자식이 이곳의 메소드안에 데이터를 넣어서 실행시킨다.
  // 버튼을 누르거나 하는 실행요소는 자식이 가지고있어도 상관없다.
    useEffect(()=>{
      youtube.mostPopular().then(items => setVideos(items));
    },[]);

    const useContent=  (name)=>{
      youtube.search(name).then(items => setVideos(items));
    }

  return  <>
  <Navbar popContent={useContent}/>
  <VideoList videos={videos}/></>;
}

export default App;
