import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "./app.module.css";
import Navbar from './components/navbar';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
const App = ({youtube}) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo,setSelectedVideo] = useState(null);
  
  // 자식요소가 이곳에 보내주고싶은 데이터가 있다,
  // 그럼 이곳에서 자식에게 매개체를 제공해야한다. 그게 바로 함수다. 자식이 이곳의 메소드안에 데이터를 넣어서 실행시킨다.
  // 버튼을 누르거나 하는 실행요소는 자식이 가지고있어도 상관없다.
    useEffect(()=>{
      youtube.mostPopular().then(items => setVideos(items));
    },[youtube]);

    const useContent=  (name)=>{
      setSelectedVideo(null);
      youtube.search(name).then(items => setVideos(items));
    }

    const selectVideo = (video) => {
      setSelectedVideo(video);
    }

  return  <>
  <Navbar popContent={useContent}/>
  <div>
    {/* video를 한개만 따로 받는다고? -> 클릭이벤트 함수 넘겨주고 비디오 받아오면 됨.
        틀렸음, 비디오 컴포넌트는 이미 화면에 출력되어있음.
        클릭 이벤트를 리스트에서 비디오아이템까지 넘겨줘서 비디오를 반환시켜야되나?
        + 함수 이름을 부모자식 다르게 하는 이유는?
    */}

    <section className={styles.content}>
      {selectedVideo&&(
        <div className={styles.detail}>
          {<VideoDetail video={selectedVideo} />}
        </div>
      )}
      <div className={styles.list}>
        <VideoList videos={videos} onVideoClick={selectVideo}
          display={selectedVideo?'list':'grid'}/>
      </div>
    </section>
  </div>
  </>;
}

export default App;
