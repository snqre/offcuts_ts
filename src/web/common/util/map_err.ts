import {
    Closure
} from "@web";

export function mapErr<T1 extends string>(e: unknown, code: T1, cb: Closure<[], void>): void {
    if (typeof e !== "string") {
        return;
    }
    if (e !== code) {
        return;
    }
    cb();
    return;
}