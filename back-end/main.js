const express = require("express")
const app = express();
app.use(express.json());
const routes = require("./routes");
app.use(routes);

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(300, () => {
    console.log('Listening on port 3000')
})