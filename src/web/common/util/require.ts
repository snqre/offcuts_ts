export function require<T1 extends string>(condition: boolean, code: T1): asserts condition is true {
    if (condition) {
        return;
    }
    throw code;
}