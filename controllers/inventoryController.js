const inventorySchema = require('../models/inventory').default;
const makeResponse = require('../util').makeResponse;

exports.getAll = async function(req, res) {
    inventorySchema.find({}, function(err, docs) {
        const fullResponse = makeResponse(err, docs);
        res.send(fullResponse);
    });
}
exports.get = async function(req, res) {
    const id = req.params.id;
    inventorySchema.findById(id, function(err, doc) {
        const fullResponse = makeResponse(err, doc);
        res.send(fullResponse);
    });
}

exports.create = async function(req, res) {
    const params = req.body;
    const inventory = new inventorySchema(params);
    inventorySchema.create(inventory, function(err, docs) {
        const fullResponse = makeResponse(err, docs);
        res.send(fullResponse);
    });
}

exports.put = async function(req, res) {
    const id = req.params.id;
    const params = req.body;
    // new option returns us the updated value
    inventorySchema.findByIdAndUpdate(id, params, {new:true}, function(err, docs) {
        const fullResponse = makeResponse(err, docs);
        res.send(fullResponse);
    });
}

exports.delete = async function(req, res) {
    const id = req.params.id;
    inventorySchema.findByIdAndDelete(id, function(err, docs) {
        const fullResponse = makeResponse(err, docs);
        res.send(fullResponse);
    });
}


