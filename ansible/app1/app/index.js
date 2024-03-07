const app = require("express")();

app.get("/", (req, res) => 
res.send("using port 8080 :)"));

app.listen(8080, () => console.log('listening on 8080'))
