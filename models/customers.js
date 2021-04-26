const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true
        },
        email: { // Might make this an index down line, should allow for faster queries when looking up by email
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: async function(email) {
                    const data = await this.constructor.find({email:email});
                    return data.length == 0;
                },
                message: 'Specified email has already been used.'
            }
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

// we will be doing lookups by email, best to index it
customerSchema.index({email: 1}, {unique: true});

const Customer = mongoose.model('Customer', customerSchema);

exports.default = Customer;