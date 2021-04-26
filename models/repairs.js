const { ObjectID } = require('bson');
const mongoose = require('mongoose');

const repairSchema = new mongoose.Schema(
    {
        customerEmail: {
            type: String, 
            required: true
        },
        itemName: { // This is not intended to be used as a lookup, purely convenient info for employees
            type: String,
            required: true
        },
        customerNotes: {
            type: String, 
            required: true
        },
        sheduledDate: {
            type: Date, 
            required: true
        },
        enabled: {
            type: Boolean,
            required: true,
            default: true
        }

    },
    {
        timestamps: true //makes createdAt and updatedAt for us
    }
);

const Repair = mongoose.model('Repair', repairSchema);

exports.default = Repair;