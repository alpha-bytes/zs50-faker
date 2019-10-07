import { IEvent } from '../../typings/lambda'; 
import * as faker from 'faker'; 

/**
 * Response interface
 */
interface IHandlerResponse{
    statusCode: number, 
    body?: string, 
    headers?: {
        [key: string]: string
    }
}

interface FakeCompany{
    catchPhrase: string; 
    industry: string; 
    latitude: string; 
    longitude: string; 
}

exports.handler = async (event: IEvent, context: any): Promise<IHandlerResponse> => {

    let res: IHandlerResponse; 

    switch(event.httpMethod){
        case 'GET' || 'get': 
            const company = await faker.fake('{{company.catchPhrase}}, {{commerce.department}}, {{address.latitude}}, {{address.longitude}}').split(', '); 
            const fakeCompany: FakeCompany = {
                catchPhrase: company[0],
                industry: company[1],
                latitude: company[2], 
                longitude: company[3]
            }
            res = {
                body: JSON.stringify(fakeCompany), 
                statusCode: 200
            }; 
            break; 

        default: 
            res = {
                statusCode: 400
            }
    }

    return res; 
}