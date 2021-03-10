import React from "react";
const BlogCard = ({ title, content, username, timestamp }) => (
  <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        left: "50%",
        top: "10%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        width: "600px",
        height: "200px",
      }}
    >
      test
    </div>
  </>
);

export default BlogCard;
