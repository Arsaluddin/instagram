import React from "react";
import Avatar from '@mui/material/Avatar';
import './Story.css';


const Story = () => {

    return(
        <>
            <div className="StoryHeader">
               <div className="Story">
                 <div className="stories">
                 <Avatar
                     alt="Remy Sharp"
                     src="https://assets.telegraphindia.com/telegraph/2022/Jun/1655907639_virat.jpg"
                     sx={{ width: 60, height: 60 }}/>
                 </div>
                 <div className="stories">
                 <Avatar
                     alt="Remy Sharp"
                     src="https://assets.telegraphindia.com/telegraph/2022/Jun/1655907639_virat.jpg"
                     sx={{ width: 60, height: 60 }}/>
                 </div>
                 <div className="stories">
                 <Avatar
                     alt="Remy Sharp"
                     src="https://assets.telegraphindia.com/telegraph/2022/Jun/1655907639_virat.jpg"
                     sx={{ width: 60, height: 60 }}/>
                 </div>
              </div>       
            </div>
        </>
    )
}

export default Story;

