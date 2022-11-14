import React, { useEffect, useState } from "react";
import './Home.css';
import  Story from'./Story.js';
import Posts from './Post.js';
import {db} from './firebase';

const Home = () => {

    const [posta,setPosta] = useState([]);

    useEffect(() => {

      // snapshot function runs every time posta changes
      db.collection('posta').onSnapshot(snapshot => {
        setPosta(snapshot.docs.map(doc => doc.data()));
      })

    }, []);

    return(
        <>
           <div className="container">
              <div className="Story">
                <Story/>
              </div>
           </div>
           {
               posta.map(post => (
                <Posts  caption={post.caption} 
                username={post.username} imageurl={post.imageurl}/>
              ))
            }
        </>
    )
}

export default Home;
