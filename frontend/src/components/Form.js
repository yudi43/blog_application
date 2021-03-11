import React, { useState } from "react";
import ImageUpload from "./ImageUpload";

export const Form = () => {
  const [img, setImage] = useState(null);
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  const uploadImage = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div
        className="form-group"
        style={{
          margin: "20px",
        }}
      >
        <label htmlFor="name">Title</label>
        <input className="form-control" id="name" />
      </div>
      <div
        className="form-group"
        style={{
          margin: "20px",
        }}
      >
        <label htmlFor="email">Content</label>
        <input type="text" className="form-control" id="content" />
      </div>
      <div className="form-group">
        <ImageUpload setImg={setImage} />
      </div>
      <div className="form-group">
        <button
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
