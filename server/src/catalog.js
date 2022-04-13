let add = (catalog, req) => {
    catalog.push(req.body);
    return JSON.stringify(catalog, null, 4);
};
let del = (catalog, req) => {
    const idx = catalog.findIndex(item => item.id === +req.params.id);
    if (idx !== -1) {
        catalog.splice(idx, 1);
    }
    return JSON.stringify(catalog, null, 4);
};

module.exports = {
    add,
    del
};
