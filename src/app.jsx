import React from "react";
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./app.css";
import MostPopular from './components/mostPopular';
import Navbar from './components/navbar';

const App = (props) => {
  const [videos, setVideos] = useState([]);
  // 자식요소가 이곳에 보내주고싶은 데이터가 있다,
  // 그럼 이곳에서 자식에게 매개체를 제공해야한다. 그게 바로 함수다. 자식이 이곳의 메소드안에 데이터를 넣어서 실행시킨다.
  // 버튼을 누르거나 하는 실행요소는 자식이 가지고있어도 상관없다.


  
  
    useEffect(()=>{
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=yerinB&key=AIzaSyA1i_aV14gCOEmsaebhTpff5RyHXEeB_M4", requestOptions)
      .then(response => response.json())
      .then(result => {

        setVideos(result.items);

    
      })
      .catch(error => console.log('error', error));
    })




  const useContent = useCallback((name)=>{
    
  })

  return <>
  <Navbar popContent={useContent}/>
  <MostPopular videos={videos}/>
  <img className="imgs" alt=""/>
  <img className="imgs" alt=""/>
  <img className="imgs" alt=""/>
  <img className="imgs" alt=""/>
  <img className="imgs" alt=""/>


  </>;
}

export default App;
