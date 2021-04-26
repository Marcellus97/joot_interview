const customerSchema = require('../models/customers').default;
const makeResponse = require('../util').makeResponse;

exports.getAll = async function(req, res) {
    customerSchema.find({}, function(err, docs) {
        const fullResponse = makeResponse(err, docs);
        res.send(fullResponse);
    });
}
exports.get = async function(req, res) {
    const id = req.params.id;
    customerSchema.findById(id, function(err, doc) {
        const fullResponse = makeResponse(err, doc);
        res.send(fullResponse);
    });
}

// figured this might be useful, maybe this is out of scope...
exports.getByEmail = async function(req, res) {
    const email = req.params.email;
    customerSchema.find({email:email}, function(err, docs) {
        const fullResponse = makeResponse(err, docs);
        res.send(ullResponse);
    });
}

exports.create = async function(req, res) {
    const params = req.body;
    const customer = new customerSchema(params);
    customerSchema.create(customer, function(err, docs) {
        const fullResponse = makeResponse(err, docs);
        res.send(fullResponse);
    });
}

exports.update = async function(req, res) {
    const id = req.params.id;
    const params = req.body;
    // new option returns us the updated value
    customerSchema.findByIdAndUpdate(id, params, {new:true}, function(err, docs) {
        const fullResponse = makeResponse(err, docs);
        res.send(fullResponse);
    });
}

exports.delete = async function(req, res) {
    const id = req.params.id;
    customerSchema.findByIdAndDelete(id, function(err, docs) {
        const fullResponse = makeResponse(err, docs);
        res.send(fullResponse);
    });
}
