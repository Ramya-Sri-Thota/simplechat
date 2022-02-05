import React from "react";
import firebase from "firebase/compat/app";
import { Button } from "@material-ui/core";
import { auth } from "../firebase.js";
function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button onClick={signInWithGoogle}>Sign In With Google </Button>
    </div>
  );
}

export default SignIn;
