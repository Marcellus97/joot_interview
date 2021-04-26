const express = require('express');
const router = express.Router();
const CATEGORIES = require('../util').CATEGORIES;

// This should be auto generated with some toodl but this is simple enough
router.get('/', (req, res) => {
    const data = {
        welcome: 'Welcome to the Bicycle shop api 🚲',
        routes: [
            {
                name: '/Customers',
                routes: [
                    {
                        name:'GET /',
                        description: 'Returns all customers'
                    },
                    {
                        name:'GET /{id}',
                        description: 'Returns customers with specified id',
                    },
                    {
                        name:'POST /',
                        description: 'Creates a new customer from params sent through json body',
                        params: {
                            firstName: 'string',
                            lastName: 'string',
                            email: 'unique string'
                        }
                    },
                    {
                        name:'PUT /{id}',
                        description: 'Updates customer with specified id with values sent in json body',
                        params: {
                            firstName: 'string',
                            lastName: 'string',
                            email: 'unique string'
                        }
                    },
                    {
                        name: 'DELETE /{id}',
                        description: 'Deletes customer with specified id'
                    }
                ]
            },
            {
                name: '/Inventory',
                routes: [
                    {
                        name:'GET /',
                        description: 'Returns all inventory catalogs',
                    },
                    {
                        name:'GET /{id}',
                        description: 'Returns inventory catalog with specified id'
                    },
                    {
                        name:'POST /',
                        description: 'Creates a new inventory catalog from params sent through json body',
                        params: {
                            itemName: 'unique string',
                            count: 'integer >= 0',
                            category: `enum string, pick from [${CATEGORIES}]`
                        },
                    },
                    {
                        name:'PUT /{id}',
                        description: 'Updates inventory catalog with specified id with values sent in json body',
                        params: {
                            itemName: 'unique string',
                            count: 'integer >= 0',
                            category: `enum string, pick from [${CATEGORIES}]`
                        },
                    },
                    {
                        name: 'DELETE /{id}',
                        description: 'Deletes inventory catalog with specified id'
                    }
                ]
            },
            {
                name: '/Repair',
                routes: [
                    {
                        name:'GET /',
                        description: 'Returns all repairs',
                    },
                    {
                        name:'GET /{id}',
                        description: 'Returns repair with specified id'
                    },
                    {
                        name:'POST /',
                        description: 'Creates a new repair from params sent through json body',
                        params: {
                            customerEmail: 'string',
                            customerNotes: 'string',
                            itemName: 'string',
                            scheduleDate:'date with format <YYYY-mm-ddTHH:MM:ss>'
                        },
                    },
                    {
                        name:'PUT /{id}',
                        description: 'Updates repair with specified id with values sent in json body',
                        params: {
                            customerEmail: 'string',
                            customerNotes: 'string',
                            itemName: 'string',
                            scheduleDate:'date with format <YYYY-mm-ddTHH:MM:ss>'
                        }
                    },
                    {
                        name: 'DELETE /{id}',
                        description: 'Deletes repair with specified id'
                    }
                ]
            }
        ]
    }
    res.send(data);
});

module.exports = router;