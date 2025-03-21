import {
    Result
} from "ts-results";

export type Storage<T1=unknown, T2 extends string=string> = {
    get(): Promise<Result<T1, T2>>,
    set(data: T1): Promise<Result<void, T2>>
};