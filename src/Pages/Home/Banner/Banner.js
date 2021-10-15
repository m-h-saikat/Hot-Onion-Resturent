import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-serction mx-auto w-100">
      <div className=" mx-auto w-100  Banner-search">
        <h1>Best Food waiting for your belly</h1>
        <div>
         
          <input type="text" name="" id="" placeholder="Search food items" />
          <button class="btn btn-danger">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
