const ClientError = require("../exceptions/client_error");
 
class InputError extends ClientError {
    constructor(message) {
        super(message);
        this.name = 'InputError';
    }
}
 
module.exports = InputError;