import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/session";
import Button from "@material-ui/core/Button";
import BlogCard from "./blogCard";
import Modal from "./Modal";
import Container from "./Container";

const mapStateToProps = ({ session }) => ({
  session,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

const Dashboard = ({ logout, session }) => {
  const triggerText = "Create Post";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  return (
    <div
      style={{
        width: "600px",
        margin: "auto",
        width: "50%",
      }}
    >
      <div style={{ display: "flex", width: "600px" }}>
        <div>
          <h1>Hi {session.username}!</h1>
        </div>
        <div
          style={{
            width: "150px",
          }}
        ></div>
        <Container triggerText={triggerText} onSubmit={onSubmit} />

        <Button onClick={logout}>Logout</Button>
      </div>
      <div>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
