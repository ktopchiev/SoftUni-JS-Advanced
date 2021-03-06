
function validate(HTTPRequest) {
    let validatorObject = {
        method: ['GET', 'POST', 'DELETE', 'CONNECT'],
        uri: '',
        version: ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'],
        message: '',
    };

    const URI_REGEX_PATTERN = /^([\w.]+)$/gm;
    const MESSAGE_REGEX_PATTERN = /^([^<>\\&'"]+)$/gm;

    function getErrorMessage(key) {
        if (key === 'uri') {
            return `Invalid request header: Invalid ${key.toUpperCase()}`;
        } else {
            return `Invalid request header: Invalid ${key[0].toUpperCase() + key.substr(1)}`;
        }
    }

    function validateInputObjectProperties(object) {
        for (const key of Object.keys(validatorObject)) {
            if (!object.hasOwnProperty(key)) {
                throw new Error(getErrorMessage(key));
            }
        }
    }

    for (const [key, value] of Object.entries(HTTPRequest)) {
        if (key === 'method' || key === 'version') {
            let findValue = validatorObject[key].find(e => e === value);
            if (!findValue) {
                throw new Error(getErrorMessage(key));
            } else {
                validatorObject[key] = value;
            }
        } else if (key === 'uri') {
            if (value !== '' && URI_REGEX_PATTERN.test(value) || value === '*') {
                validatorObject[key] = value;
            } else {
                throw new Error(getErrorMessage(key));
            }
        } else if (key === 'message') {
            if (value === '' || MESSAGE_REGEX_PATTERN.test(value)) {
                validatorObject[key] = value;
            } else {
                throw new Error(getErrorMessage(key));
            }
        }
    }

    validateInputObjectProperties(HTTPRequest);

    return validatorObject;
}

let obj = {
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
};

try {
    console.log(validate(obj));
} catch (error) {
    console.log(error);
}
