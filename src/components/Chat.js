import { SignOut } from "./SignOut";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import SendMessages from "./SendMessages";

function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      db.collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unmounted = true;
    };
  }, []);
  return (
    <div className="chatbox-page">
      <div className="container">
        <SignOut />
        <div className="row">
          <div className="col-sm-6 ">
            <SendMessages />
          </div>
          <div className="col-sm-6 ">
            <div className="chatbox-aside border1">
              {messages.map(({ id, text, photoURL, uid }) => {
                return (
                  <div className="chats-sec">
                    <div
                      key={id}
                      className={`msg  d-flex ${
                        uid === auth.currentUser.uid ? "sent" : "recieved"
                      }`}
                    >
                      {console.log("sent person", auth.currentUser.uid)}
                      {console.log("uid", uid)}

                      <img src={photoURL} alt="" className="user-img" />
                      <p>{text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
