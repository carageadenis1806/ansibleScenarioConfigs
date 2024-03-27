const app = require("express")();
// Set the http_proxy environment variable to the Squid proxy
process.env.http_proxy = 'http://localhost:3128';


app.get("/", (req, res) => 
res.send("using port 8080 :)"));

app.listen(8080, () => console.log('listening on 8080'))
