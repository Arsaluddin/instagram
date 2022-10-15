import React from "react";
import './Story.css';


const Story = () => {

    return(
        <>
            <div className="StoryHeader">
               <div className="Story">
                 <div className="stories">
                    <img className="stories-img" src="https://assets.telegraphindia.com/telegraph/2022/Jun/1655907639_virat.jpg" height={60} width={60}></img>
                    <p>virat</p>
                 </div>
                 <div className="stories">
                    <img className="stories-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGH-vLqWoKxeUdO_-j3FfRt_ickuQEG-QCUroW7k&s" height={60}></img>
                    <p>arsal</p>
                 </div>
                 <div className="stories">
                    <img className="stories-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGH-vLqWoKxeUdO_-j3FfRt_ickuQEG-QCUroW7k&s" height={60}></img>
                    <p>demo</p>
                 </div>
              </div>       
            </div>
        </>
    )
}

export default Story;

