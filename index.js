const http = require("http");  //Creating a server

//In default route URL single API will run
http.createServer((req, res) => {
  var usr1 = {
    name: "Piyush",
    batch: "October",
    age: 24,
    course: "MERN stack",
  };
  res.write("Plain Text");
  res.write(JSON.stringify(usr1));
  res.end();
}).listen(3000);