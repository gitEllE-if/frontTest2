const express = require('express');
const serveStatic = require('serve-static');
const catalog = require('./catalogRouter');

const app = express();
const port = process.env.PORT || 5050;

app.use(express.static(`${__dirname}/../../dist`));
app.use(serveStatic(__dirname + "/../../dist"));
app.use(express.json());
app.use('/api/catalog', catalog);

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../../dist/index.html'));
});

app.listen(port, () => { console.log(`listen at port ${port}...`); });
