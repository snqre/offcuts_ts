import {
    type ProductData,
    type OrderData,
    Server
} from "@common";

export const Bridge = Server<{}, {
    "/username_is_available": [{
        username: string
    }, {
        success: boolean
    }],
    "/product_is_in_stock": [
        productKey: string,
        boolean
    ],
    "/has_product": [
        productKey: string, 
        boolean
    ],
    "/materials": [
        null, 
        Array<string>
    ],
    "/products_by_key": [
        productKey: string,
        response: Array<ProductData>
    ],
    "/products": [
        null, 
        response: Array<ProductData>
    ],
    "/sign_up": [{
        username: string,
        password: string,
        email: string
    }, errcode: Bridge.Err | null],
    "/sign_in": [{
        username: string,
        password: string
    }, errcode: Bridge.Err | null],
    "/list": [{
        adminPassword: string,
        product: ProductData
    }, errcode: Bridge.Err | null]
    "/delist": [{
        adminPassword: string,
        productKey: string
    }, errcode: Bridge.Err | null]
    "/set_stock": [{
        adminPassword: string,
        productKey: string,
        productAmount: number
    }, errcode: Bridge.Err | null],
    "/increase_stock": [{
        adminPassword: string,
        productKey: string,
        productAmount: number
    }, errcode: Bridge.Err | null],
    "/decrease_stock": [{
        adminPassword: string,
        productKey: string,
        productAmount: number
    }, errcode: Bridge.Err | null],
    "/set_price": [{
        adminPassword: string,
        productKey: string,
        productAmount: number
    }, errcode: Bridge.Err | null],
    "/increase_price": [{
        adminPassword: string,
        productKey: string,
        productAmount: number
    }, errcode: Bridge.Err | null],
    "/decrease_price": [{
        adminPassword: string,
        productKey: string,
        productAmount: number
    }, errcode: Bridge.Err | null],
    "/checkout": [{
        orders: Array<OrderData>
    }, {
        url: string,
        errcode: Bridge.Err | null
    }]
}>();

export namespace Bridge {
    export type Err =
        | "BRIDGE.ERR_INVALID_REQUEST"
        | "BRIDGE.ERR_USERNAME_NOT_AVAILABLE";
}