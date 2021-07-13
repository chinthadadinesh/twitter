
import React from "react";
import "./Sidebar.css";
import { withRouter } from 'react-router-dom';
import { Button } from "@material-ui/core";



function Login(props) {
    console.log(props,"props")
  return (
    <div >
         <Button
        onClick={()=>props.history.push('/dashboard')}
          type="submit"
          className="tweetBox__tweetButtonLogin"
        >
          Login with Twitter
        </Button>
    </div>
  );
}

export default withRouter(Login);