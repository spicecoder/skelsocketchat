import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import AddForm from "./add-component";
const ENDPOINT = "http://127.0.0.1:4001";


const socket = socketIOClient (ENDPOINT);

const SendMessage = message => {
  console.log("from user1 to user2 "+message)
  socket.emit ("user1-user2",message)                                                                                                                               
};
function App() {
  const [addState ,setAddState] = useState("");

  useEffect(() => {
   // const socket = socketIOClient(ENDPOINT);
    socket.on("server-user1", ( )=> {
      setAddState( "user 1 message success");
    });
    socket.on("server-user2", (data )=> {
      setAddState( data);
    });
  }, []);

  return (
    <div>
       Send Message 
      <AddForm addSuccess={(data) => SendMessage(data)}  resultof = {addState}/>
    </div>
  );
}

export default App;
