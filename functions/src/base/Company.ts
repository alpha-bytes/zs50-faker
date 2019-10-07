import * as qs from 'query-string'; 
import { IEvent } from '../../../typings/lambda';

export interface CompanyResponse{
    company: string; 
    catchPhrase: string; 
    industry: string; 
    latitude: string; 
    longitude: string; 
}

export abstract class Company{

    public company: string; 

    constructor(public event: IEvent){ 
        this.company = event.queryStringParameters.company; 
    }

    validate(): void{
        // ensure all requests contain "company" param
        if(!this.company)
            throw new Error('company query param is required');
    }

}