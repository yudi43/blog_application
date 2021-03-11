import React from "react";
import Button from "@material-ui/core/Button";
const BlogCard = ({ title, content, username, timestamp }) => (
  <>
    <div
      style={{
        padding: "20px",
        margin: "20px",
        width: "50%",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        width: "600px",
        height: "350px",
      }}
    >
      <img
        src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
        alt="Girl in a jacket"
        width="600px"
        height="200"
      ></img>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3
          style={{
            paddingLeft: "10px",
          }}
        >
          Here comes the title
        </h3>
        <h4>25th dec 2020</h4>
        <h4
          style={{
            paddingRight: "10px",
          }}
        >
          <Button>Edit</Button>
        </h4>
      </div>
      <p
        style={{
          flex: "50%",
          paddingLeft: "10px",
        }}
      >
        Rest of the paragraph. Rest of the paragraph. Rest of the paragraph.
        Rest of the paragraph. Rest of the paragraph. Rest of the paragraph.
        Rest of the paragraph. Rest of the paragraph.
      </p>
    </div>
  </>
);

export default BlogCard;
