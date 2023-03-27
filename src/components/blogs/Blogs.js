import React from "react";
import Blog from "../blog/Blog";
import ServiceHeaderLeft from "../serviceHeaderLeft/ServiceHeaderLeft";

const Blogs = () => {
  return (
    <div className="background-main-color">
      <div
        style={{
          position: "relative",
          width: "100vw",
          //   backgroundColor: "red",
        }}
        touch-action="none"
      >
        <ServiceHeaderLeft header={"BLOGS"} headerNumber={"03"} />
      </div>
      <Blog />
    </div>
  );
};

export default Blogs;
