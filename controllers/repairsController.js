const repairSchema = require('../models/repairs').default;
const makeResponse = require('../util').makeResponse;

exports.getAll = async function(req, res) {
    repairSchema.find({}, function(err, docs) {
        const fullResponse = makeResponse(err, docs);
        res.send(fullResponse);
    });
}
exports.get = async function(req, res) {
    const id = req.params.id;
    repairSchema.findById(id, function(err, doc) {
        const fullResponse = makeResponse(err, doc);
        res.send(fullResponse);
    });
}

exports.create = async function(req, res) {
    const params = req.body;
    const repair = new repairSchema(params);
    repairSchema.create(repair, function(err, docs) {
        const fullResponse = makeResponse(err, docs);
        res.send(fullResponse);
    });
}

exports.put = async function(req, res) {
    const id = req.params.id;
    const params = req.body;
    // new option returns us the updated value
    repairSchema.findByIdAndUpdate(id, params, {new:true}, function(err, docs) {
        const fullResponse = makeResponse(err, docs);
        res.send(fullResponse);
    });
}

exports.delete = async function(req, res) {
    const id = req.params.id;
    repairSchema.findByIdAndDelete(id, function(err, docs) {
        const fullResponse = makeResponse(err, docs);
        res.send(fullResponse);
    });
}