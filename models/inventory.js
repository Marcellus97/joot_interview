const mongoose = require('mongoose');
const CATEGORIES = require('../util').CATEGORIES;
const inventorySchema = new mongoose.Schema(
    {
        itemName: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: async function(itemName) {
                    const data = await this.constructor.find({itemName: itemName});
                    return data.length == 0;
                },
                message: 'Specified itemName has already been used.'
            }
        },
        count: {
            type: Number,
            required: true,
            default: 0,
            min: 0,
            validate : {
                validator : Number.isInteger,
                message   : 'Count must be an integer value.'
            }
        },
        category: {
            type: String,
            enum: CATEGORIES,
            required: true
        }
    },
    {
        timestamps: true //makes createdAt and updatedAt for us
    }
);

inventorySchema.index({itemName: 1},{unique: true});
const Inventory = mongoose.model('Inventory', inventorySchema);

exports.default = Inventory;