const app = require("express")();

app.get("/", (req, res) => 
res.send("using port 8081 :)"));

app.listen(8081, () => console.log('listening on 8081'))