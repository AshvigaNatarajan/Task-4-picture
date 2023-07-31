import ReactDOM from "react-dom";
import React from "react";
import img1 from './nature.jpg'
import img2 from './nature1.jpg'
import img3 from './look.jpg'
import img4 from './save.jpg'
import './style.css'
const myele=<div>
    <div>
    <img className="img1" src={img1} alt="logo" border="3px"></img>
    <img className="img2" src={img2} alt="logo"  border="3px"></img>
    </div>
    <div>
        <video className="video" controls>
            <source src="./video/pexels_videos_2616637 (1080p).mp4" type="video/mp4"/>"
        </video>
    </div>
    <div>
    <img className="img3" src={img3} alt="logo" border="3px"></img>
    <img className="img4"src={img4} alt="logo" border="3px"></img>
    </div>
</div>
ReactDOM.render(myele,document.getElementById("root"));
