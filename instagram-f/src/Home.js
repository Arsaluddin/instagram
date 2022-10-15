import React from "react";
import './Home.css';
import  Story from'./Story.js';
import Posts from './Post.js';

const Home = () => {

    return(
        <>
           <div className="container">
              <div className="Story">
                <Story/>
              </div>
              <div className="posts">
                <Posts/>  
              </div>
           </div>
        </>
    )
}

export default Home;
