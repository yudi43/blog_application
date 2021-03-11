import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import { firebase_app } from "../firebase/firebase";
import axios from "axios";
import shortid from "shortid";

export const Form = (props) => {
  const [img, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault(event);

    const storageRef = firebase_app.storage().ref();
    const fileRef = storageRef.child(img[0].name);
    await fileRef.put(img[0]);
    const fileUrl = await fileRef.getDownloadURL();
    const blogid = shortid.generate();

    const blogData = {
      blogid,
      title,
      content,
      pictureid: fileUrl,
      username: props.username,
      timestamp: Date().toLocaleString(),
    };

    axios
      .post(`http://localhost:5000/blogs/createBlog`, { blogData })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    console.log(fileUrl);
  };

  const uploadImage = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  let showButton;
  if (content && title && img) {
    showButton = true;
  } else {
    showButton = false;
  }
  return (
    <form onSubmit={onSubmit}>
      <div
        className="form-group"
        style={{
          margin: "20px",
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          className="form-control"
          id="title"
          placeholder="Enter the title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div
        className="form-group"
        style={{
          margin: "20px",
        }}
      >
        <label htmlFor="content">Content</label>
        <input
          type="text"
          className="form-control"
          id="content"
          placeholder="Enter the content here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="form-group">
        <ImageUpload setImg={setImage} />
      </div>
      <div className="form-group">
        <button
          disabled={!showButton}
          onSubmit={onSubmit}
          className="form-control btn btn-primary"
          type="submit"
          style={{
            margin: "20px",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
