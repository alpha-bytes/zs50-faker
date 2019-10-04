import { IEvent, IHandlerResponse } from '../../typings/lambda'; 

exports.handler = async (event: IEvent, context: any): Promise<IHandlerResponse> => {
    
    console.log(event);

    let res: IHandlerResponse = {
        statusCode: 201, 
        body: event.body
    };

    return res; 
}