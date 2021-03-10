import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/session";
import Button from "@material-ui/core/Button";

const mapStateToProps = ({ session }) => ({
  session,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

const Dashboard = ({ logout, session }) => (
  <>
    <div style={{}}>
      <div>
        <h1>Hi {session.username}!</h1>
      </div>
      <div
        style={{
          width: "200px",
        }}
      ></div>
      <Button onClick={() => {}}>Create Post</Button>
      <Button onClick={logout}>Logout</Button>
    </div>
  </>
);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
