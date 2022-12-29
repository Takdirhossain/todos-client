import { Outlet } from "react-router-dom";
import Addtodo from "../addtodo/Addtodo";
import Background from "../Background/Background";
import "./fetured.scss";

const Fetured = () => {
  return (
    <div className="featured">
      <img
        width="100%"
        src="https://png.pngtree.com/background/20210710/original/pngtree-blue-tech-smart-city-background-picture-image_968915.jpg"
        alt=""
      />
      <div className="info">
        <Outlet></Outlet>
        
       
      </div>
    </div>
  );
};

export default Fetured;
