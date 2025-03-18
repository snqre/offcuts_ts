import {
    default as Axios
} from "axios";



/**
 * ***where***
 * *     T1 : url
 * *     T2 : response
 */
export type ServerEndpoint<T1 extends string=string> = Record<>;

/**
 * ***where***
 * *     T1 : url
 * *     T2 : request
 * *     T3 : response
 */
export type ServerReceiverEndpoint<
    T1 extends string=string,
    T2 extends Array<unknown>=[],
    T3=unknown
> = Record<T1, [T2, T3]>;

/**
 * ***where***
 * *     T1 : server_endpoint_url
 * *     T2 : server_endpoint_response
 * *     T3 : server_receiver_endpoint_url
 * *     T4 : server_receiver_endpoint_args
 * *     T5 : server_receiver_endpoint_response
 * *     T6 : server_endpoint
 * *     T7 : server_receiver_endpoint
 */
export type ServerEndpoints<
    T1 extends string=string,
    T2=unknown,
    T3 extends string=string,
    T4 extends Array<unknown>=[],
    T5=unknown,
    T6 extends ServerEndpoint<T1, T2>=ServerEndpoint<T1, T2>,
    T7 extends ServerReceiverEndpoint<T3, T4, T5>=ServerReceiverEndpoint<T3, T4, T5>
> = [T6, T7];

export type Server<T1 extends ServerEndpoints> = {
    query(url: keyof T1[0]): Promise<T1[0][keyof T1[0]]>;
    touch(url: keyof T1[1], ...args: T1[1][keyof T1[1]][0]): Promise<T1[1][keyof T1[1]][1]>;
};

let s: ServerEndpoint<"/hello" | "/hi", number | string> = {
    "/hello": 59,
    "/hi": "hello"
};

let x = s["/hi"]

export function Server<
    T1 extends ServerEndpoints<
        T2,
        T3,
        T4,
        T5,
        T6,
        T7,
        T8
    >,
    T2 extends ServerEndpoint<T4, T5>,
    T3 extends ServerReceiverEndpoint<T6, T7, T8>,
    T4 extends string,
    T5,
    T6 extends string,
    T7 extends Array<unknown>,
    T8
>(): Server<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8
> {
    /***/ {
        return {query, touch};
    }
    
    async function query(url: keyof T1[0]): Promise<T1[0][keyof T1[0]]> {
        return (await Axios.get((url as string))).data;
    }
    
    async function touch(url: keyof T1[1], ...args: T1[1][keyof T1[1]][0]): Promise<T1[1][keyof T1[1]][1]> {
        return (await Axios.post((url as string), ...args)).data;
    }   
}



export type BridgeEndpoints = ServerEndpoints<
    {
        "/joe": string
    },
    {

    }
>;


export let Bridge: Server<BridgeEndpoints>;