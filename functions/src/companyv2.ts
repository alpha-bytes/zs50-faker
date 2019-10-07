import { IEvent, IHandlerResponse } from '../../typings/lambda'; 
import * as faker from 'faker'; 
import { Company, CompanyResponse } from './base/Company';

class CompanyV2 extends Company{ }

exports.handler = async (event: IEvent, context: any): Promise<IHandlerResponse> => {

    let res: IHandlerResponse; 

    const theCompany = new CompanyV2(event);
    try{
        theCompany.validate(); 
    } catch(err){
        res = {
            statusCode: 400, 
            body: err.message
        }; 
        return res; 
    }

    switch(event.httpMethod){
        case 'GET' || 'get': 
            const company = await faker.fake('{{company.catchPhrase}}, {{commerce.department}}, {{address.latitude}}, {{address.longitude}}').split(', '); 
            const fakeCompany: CompanyResponse = {
                company: theCompany.company,
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