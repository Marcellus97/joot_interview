exports.CATEGORIES = ['Accessory, Bicycle, Part'];

exports.makeResponse = function (errors, data) {
    const res = {
        status: 200,
        data: null,
        errors: []
    };

    if (data != undefined && data != null)
        res.data = data;

    // we have an error
    if (errors != null) {

        // if this exits, we have validation errors
        if (errors.errors) {
            for (let key of Object.keys(errors.errors)) // extract mongoose validation error messages
                res.errors.push(errors.errors[key].message); // sloppy but works
            res.status = 400;
        }
        // this means we have some db level error.
        // this also looks sloppy to me, but works for this simple case
        else {
            if (errors.kind && errors.kind == 'ObjectId')
                res.errors.push('id not found');
            else if (errors.codeName)  
                res.errors.push(errors.codeName);
            res.status = 404 
        }
    }

    // this is specifically an id not found case
    if (res.errors == null && data == null) {
        res.errors.push('id not found');
    }
    return res;
}