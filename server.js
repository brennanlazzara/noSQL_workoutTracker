const express = require("express");

let PORT = process.env.PORT || 8082;

let app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});