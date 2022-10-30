var express = require("express");
var app = express();

const PORT = process.env.PORT || 3000;
//assets = path.join(__dirname, 'views', 'assets');

app.use(express.static("views"));

app.get("/", function(req, res) {
    res.render("index.html");
})

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}!`),
)

// app.listen(8002, function() {
//     console.log("http://localhost:8002");
// });