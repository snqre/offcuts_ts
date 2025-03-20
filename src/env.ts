import {
    Option,
    Some,
    None
} from "@host";

export namespace Env {

    export function get(key: string): Option<string> {
        let data: string | null = process.env?.[key] || null;
        if (data) {
            return Some(data);
        }
        return None;
    }
}