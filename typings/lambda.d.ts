export declare interface IEvent{
    path: string; 
    httpMethod: string; 
    headers: object; 
    queryStringParameters: object;
    body: string; 
    isBase64Encoded: boolean; 
}

export declare interface IHandlerResponse{
    statusCode: number, 
    body: string
}

export declare type callbackFn = (error: string | null, response: object) => void; 