import {
    type RedisClientType,
    createClient as RedisSDK
} from "redis";
import {
    Result as Result$,
    Ok,
    Err
} from "ts-results";
import {
    type AppData,
    type Storage,
    Json
} from "@host";

export type RedisStorage =
    & Storage<AppData, RedisStorage.Error>
    & {};

export async function RedisStorage(_password: string, _host: string, _port: number): Promise<RedisStorage.Result<RedisStorage>> {
    let _api: RedisClientType;

    /***/ {
        if (_password.trim().length === 0) return Err("Redis.InvalidPassword");
        if (_host.trim().length === 0) return Err("Redis.InvalidHost");
        if (_port < 0 || _port > 99999) return Err("Redis.InvalidPort");
        try {
            _api = RedisSDK({
                password: _password,
                socket: {
                    host: _host,
                    port: _port
                }
            });
            (await _api.connect());
        }
        catch {
            return Err("Redis.ConnectionFailed");
        }
        return Ok({get, set});
    }

    async function get(): Promise<RedisStorage.Result<AppData>> {
        let response: string | null;
        try {
            response = (await _api.get("*"));
        }
        catch {
            return Err("Redis.GetRequestFailed");
        }
        if (response === null || response === undefined) {
            let new$: RedisStorage.Result<string> = _new();
            if (new$.err) return new$;
            let new$0: string = new$.safeUnwrap();
            response = new$0;
        }
        return Json.deserialize<AppData>(response).toResult("Redis.MalformedDeserialization");
    }

    async function set(data: AppData): Promise<RedisStorage.Result<void>> {
        let data$: RedisStorage.Result<string> = Json.serialize(data).toResult("Redis.MalformedSerialization");
        if (data$.err) {
            return data$;
        }
        let data$0: string = data$.safeUnwrap();
        try {
            (await _api.set("*", data$0));
        }
        catch {
            return Err("Redis.SetRequestFailed");
        }
        return Ok(undefined);
    }

    function _new(): RedisStorage.Result<string> {
        let data: AppData = {
            users: {},
            products: []
        };
        return Json.serialize(data).toResult("Redis.MalformedSerialization");
    }
}

export namespace RedisStorage {

    export type Result<T1> = Result$<T1, RedisStorage.Error>;

    export type Error =
        | "Redis.MalformedSerialization"
        | "Redis.MalformedDeserialization"
        | "Redis.InvalidPassword"
        | "Redis.InvalidHost"
        | "Redis.InvalidPort"
        | "Redis.GetRequestFailed"
        | "Redis.SetRequestFailed"
        | "Redis.ConnectionFailed";
}