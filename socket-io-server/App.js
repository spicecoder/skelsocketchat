const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

let interval;
var attentionList =[];
io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
 // interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
  socket.on("user1-user2", data  => {
    console.log("data received  : " + data );
   // if (saveAttention(data) =="saved" ) 
  // { socket.emit("server-user1") ;}
   socket.emit ("server-user2","Hello user2 , we received this from user1 : " + data) 
  //  else 
   // {socket.emit("server-user2");}
  } );
});
 


server.listen(port, () => console.log(`Listening on port ${port}`));