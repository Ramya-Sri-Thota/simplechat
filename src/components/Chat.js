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
    <div>
      <SignOut />
      <div className="msgs">
        {console.log(messages)}
        {messages.map(({ id, text, photoURL, uid }) => {
          return (
            <div>
              <div
                key={id}
                className={`msg ${
                  uid === auth.currentUser ? "sent" : "recieved"
                }`}
              >
                <img src={photoURL} alt="" />
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <SendMessages />
    </div>
  );
}

export default Chat;
