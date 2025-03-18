import {
    default as Axios
} from "axios";

export type Server<
    T1 extends Server.Endpoints, 
    T2 extends Server.ReceiverEndpoints
    > = {
    query<T3 extends keyof T1>(url: T3): Promise<T1[T3]>;
    touch<T3 extends keyof T2>(url: T3, data: T2[T3][0]): Promise<T2[T3][1]>;
};

export function Server<
    T1 extends Server.Endpoints,
    T2 extends Server.ReceiverEndpoints
    >(): Server<T1, T2> {
    /** @constructor */ {
        return {query, touch};
    }
    
    async function query<T3 extends keyof T1>(url: T3): Promise<T1[T3]> {
        return (await Axios.get((url as string))).data;
    }
    
    async function touch<T3 extends keyof T2>(url: T3, data: T2[T3][0]): Promise<T2[T3][1]> {
        return (await Axios.post((url as string), data)).data;
    }   
}

export namespace Server {
    /**
     * ***where***
     * *     T1 : url
     * *     T2 : response
     */
    export type Endpoints<T1 extends string=string, T2=unknown> = Record<T1, T2>;

    /**
     * ***where***
     * *     T1 : url
     * *     T2 : request
     * *     T3 : response
     */
    export type ReceiverEndpoints<
        T1 extends string=string,
        T2=unknown,
        T3=unknown
        > = Record<T1, [T2, T3]>;
}