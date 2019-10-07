export declare interface IEvent{
    path: string; 
    httpMethod: string; 
    headers: object; 
    queryStringParameters: {
        [key: string]: string
    };
    body: string; 
    isBase64Encoded: boolean; 
}

/**
 * Response interface
 */
export declare interface IHandlerResponse{
    statusCode: number, 
    body?: string, 
    headers?: {
        [key: string]: string
    }
}

export declare type callbackFn = (error: string | null, response: IHandlerResponse) => void; 