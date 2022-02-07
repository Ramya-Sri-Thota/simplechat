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
      <button onClick={signInWithGoogle} className="btn btn-primary my-5">
        Sign In With Google{" "}
      </button>
    </div>
  );
}

export default SignIn;
