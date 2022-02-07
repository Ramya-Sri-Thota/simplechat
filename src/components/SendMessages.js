import React, { useState } from "react";
import { Input } from "@material-ui/core";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const SendMessages = () => {
  const [msg, setMsg] = useState("");
  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
  }
  return (
    <div className="sendbox-sec border1">
      <form onSubmit={sendMessage}>
        <Input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="...Message"
          className="form-control mb-3"
        />
        <Picker onSelect={(emoji) => setMsg(emoji.native)} />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessages;
