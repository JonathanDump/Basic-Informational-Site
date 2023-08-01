const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  let path = "./";

  switch (req.url) {
    case "/": {
      path += "index.html";
      res.statusCode = 200;
      break;
    }
    case "/about": {
      path += "about.html";
      res.statusCode = 200;
      break;
    }
    case "/contact-me": {
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    }
    case '/about-me': {
        res.statusCode = 301;
        res.setHeader('Location', '/about')
        res.end()
        break;
    }
    default: {
      path += "404.html";
      res.statusCode = 400;
      break;
    }
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(8000, "localhost", () => {
  console.log("Server is running at  http://localhost:8000/");
});
