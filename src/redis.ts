import {
    type RedisClientType,
    type AppData,
    type Storage,
    RedisSDK,
    Ok,
    Err,
    Result as Result$,
    Json
} from "@host";

export type Redis =
    & Storage<AppData, Redis.Error>
    & {};

export async function Redis(_password: string, _host: string, _port: number): Promise<Redis.Result<Redis>> {
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

    async function get(): Promise<Redis.Result<AppData>> {
        let response: string | null;
        try {
            response = (await _api.get("*"));
        }
        catch {
            return Err("Redis.GetRequestFailed");
        }
        if (response === null || response === undefined) {
            let new$: Redis.Result<string> = _new();
            if (new$.err) return new$;
            let new$0: string = new$.safeUnwrap();
            response = new$0;
        }
        return Json.deserialize<AppData>(response).toResult("Redis.MalformedDeserialization");
    }

    async function set(data: AppData): Promise<Redis.Result<void>> {
        let data$: Redis.Result<string> = Json.serialize(data).toResult("Redis.MalformedSerialization");
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

    function _new(): Redis.Result<string> {
        let data: AppData = {
            users: {},
            products: []
        };
        return Json.serialize(data).toResult("Redis.MalformedSerialization");
    }
}

export namespace Redis {

    export type Result<T1> = Result$<T1, Redis.Error>;

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