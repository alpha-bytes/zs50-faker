import { IEvent, IHandlerResponse, callbackFn } from "../../typings/lambda";

/**
 * This mocks a deprecated api (v1)
 */

 exports.handler = function(event: IEvent, context: any, callback: callbackFn): void{
     const res: IHandlerResponse = {
         statusCode: 404, 
         body: 'This resource no longer exists.'
     };
     callback(null, res); 
 }
