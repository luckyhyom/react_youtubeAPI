import React from "react";
import "./app.css";

const App = (props) => {
  
  

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  setTimeout(() => {
    const test1 = document.querySelector('.test');
  fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=yerinB&key=AIzaSyAhGOQ1DaT_FC8aVwLsNvD28WJZ0hCLSJ8", requestOptions)
    .then(response => response.json())
    .then(result => {

      console.log(result.items[0].snippet.thumbnails.default.url);
      test1.src = result.items[0].snippet.thumbnails.default.url;
      console.log(result.items.length);
      result.items.forEach(i => {
        // const test2 = [...test1,{src:i.snippet.thumbnails.default.url}];
        // this.setState({test1:test2});
        // console.log(i.snippet.thumbnails.default.url);
        // test1.src = i.snippet.thumbnails.default.url;

      });
      // for(let i=0;i<25;i++){
      //   console.log(result.items[i]);
      // }
    }
    )
    .catch(error => console.log('error', error));  
  }, 1000);
  

  return <img className="test"/>;
}

export default App;
