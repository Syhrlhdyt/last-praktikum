import React from "react";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";

const Main=()=>{
    return(
        <div className="header">
        <div className="row1">
            <h1>A Room without books is like <br/> a body without a soul.</h1>
        </div>
        <div className="row2">
            <h2>Find Your Book</h2>
            <div className="search">
                <input type="text" placeholder="Enter Your Book Name" />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <img src="./images/img3.jpg" alt="" />
        </div>
      </div>
    )
}

export default Main;