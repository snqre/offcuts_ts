import {
    Option,
    Some,
    None
} from "@common";

export namespace Json {

    export function serialize<T1=unknown>(data: T1): Option<string> {
        try {
            return Some(JSON.stringify(data));
        }
        catch {
            return None;
        }
    }
    
    export function deserialize<T1=unknown>(string: string): Option<T1> {
        try {
            return Some(JSON.parse(string));
        }
        catch {
            return None;
        }
    }
}