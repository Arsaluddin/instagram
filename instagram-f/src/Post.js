import React from "react";
import './Post.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Post = () => {

    return(
        <>
            <div className="post-container">
               <div className="post-header">
                  <div className="header-image">
                       <img className="header-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGH-vLqWoKxeUdO_-j3FfRt_ickuQEG-QCUroW7k&s" height={20}></img>
                  </div>
                  <div className="header-name">
                     <p>virat</p> 
                  </div>
                  <div className="more-icon">
                      <MoreHorizIcon/> 
                  </div>
               </div>
               <div className="post-image">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkS952Ca-Ktw2fRa9vEr9Dvhwre_dau2GiGg&usqp=CAU" width={470} height={300}></img>
               </div>
               <div className="post-discription">
                  <div className="post-icon">
                    <div className="like">
                        <FavoriteBorderIcon/>
                    </div>
                    <div className="comment">

                    </div> 
                    <div className="share">

                    </div>
                  </div>
                  <div className="post-likes">

                  </div>
                  <div className="post-caption">

                  </div>
                  <div className="post-comments">

                  </div>
                  <div className="post-date">

                  </div>
               </div>
               <div className="post-comment">
                   <div className="post-emoji">

                   </div>
                   <div className="post-Addcomment">
                       
                   </div>
               </div>
            </div>
        </>
    )
}

export default Post;