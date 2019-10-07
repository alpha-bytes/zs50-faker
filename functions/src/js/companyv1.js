"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This mocks a deprecated api (v1)
 */
exports.handler = function (event, context, callback) {
    var res = {
        statusCode: 404,
        body: 'This resource no longer exists.'
    };
    callback(null, res);
};
