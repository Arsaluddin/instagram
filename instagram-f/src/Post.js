import React from "react";
import './Post.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Avatar from '@mui/material/Avatar';


const Post = ({username , caption , imageurl}) => {

    return(
        <>
            <div className="post-container">
               <div className="post-header">
                  <div className="header-image">
                     
                       <Avatar alt="Remy Sharp" src="https://images.moneycontrol.com/static-mcnews/2022/10/Collage-Maker-23-Oct-2022-06.50-PM-770x435.jpg?impolicy=website&width=770&height=431" />

                       
                  </div>
                  <div className="header-name">
                     <p><strong>{username}</strong></p> 
                  </div>
                  <div className="more-icon">
                      <MoreHorizIcon/> 
                  </div>
               </div>
               <div className="post-image">
                   <img src={imageurl} alt="" width={600}></img>
               </div>
               <div className="post-discription">
                  <div className="post-icon">
                    <div className="like">
                        <FavoriteBorderIcon/>
                    </div>
                    <div className="comment">
                        <svg aria-label="Comment" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                    </div> 
                    <div className="share">
                       <svg aria-label="Share Post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                    </div>
                    <div className="bookmark">
                      <BookmarkBorderIcon/>
                    </div>
                  </div>
                  <div className="post-likes">
                     <p>188 likes</p>
                  </div>
                  <div className="post-caption">
                       <p><b>{caption}</b></p> 
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