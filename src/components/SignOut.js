import React from "react";
import { auth } from "../firebase.js";
import { Button } from "@material-ui/core";

export function SignOut() {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  );
}
