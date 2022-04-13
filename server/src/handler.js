const catalog = require('./catalog');
const fs = require('fs');

const actions = {
    add: catalog.add,
    del: catalog.del
};

let handler = (req, res, action, file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ success: 0, text: err }));
        } else {
            const newCatalog = actions[action](JSON.parse(data), req);
            fs.writeFile(file, newCatalog, (err) => {
                if (err) {
                    res.sendStatus(404, JSON.stringify({ success: 0, text: err }));
                } else {
                    res.send(JSON.stringify({ success: 1 }))
                }
            })
        }
    })
};

module.exports = handler;