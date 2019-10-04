import { IEvent } from '../../typings/lambda'; 
import * as faker from 'faker'; 

interface IHandlerResponse{
    statusCode: number, 
    body?: string
}

interface FakeCompany{
    catchPhrase: string; 
    latitude: string; 
    longitude: string; 
}

exports.handler = async (event: IEvent, context: any): Promise<IHandlerResponse> => {

    let res: IHandlerResponse; 

    switch(event.httpMethod){
        case 'GET' || 'get': 
            const company = await faker.fake('{{company.catchPhrase}}, {{address.latitude}}, {{address.longitude}}').split(', '); 
            const fakeCompany: FakeCompany = {
                catchPhrase: company[0],
                latitude: company[1], 
                longitude: company[2]
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