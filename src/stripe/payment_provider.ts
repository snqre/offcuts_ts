import {
    type Closure,
    type OrderData
} from "@host";
import { Result } from "ts-results";

/**
 * ***where***
 * * T1 : callback args
 * * T2 : error
 */
export type PaymentProvider<
    T1 extends Array<unknown>=[],
    T2 extends string=string
    > = {
    receive(
        baseUrl: string,
        orders: Array<OrderData>,
        onSuccess: Closure<T1, Result<void, T2>>,
        onFailure: Closure<T1, Result<void, T2>>
    ): Promise<Result<string, T2>>
};