"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Company = /** @class */ (function () {
    function Company(event) {
        this.event = event;
        this.company = event.queryStringParameters.company;
    }
    Company.prototype.validate = function () {
        // ensure all requests contain "company" param
        if (!this.company)
            throw new Error('company query param is required');
    };
    return Company;
}());
exports.Company = Company;
