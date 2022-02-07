import React from "react";
import { auth } from "../firebase.js";
import { Button } from "@material-ui/core";

export function SignOut() {
  return (
    <div className="signout-btn">
      <button onClick={() => auth.signOut()} className="btn btn-primary my-3">
        Sign Out
      </button>
    </div>
  );
}
