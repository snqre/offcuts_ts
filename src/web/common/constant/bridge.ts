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
    "/products_by_material": [
        productKey: string,
        response: Array<ProductData>
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
    }, errcode: Bridge.MaybeError],
    "/sign_in": [{
        username: string,
        password: string
    }, errcode: Bridge.MaybeError],
    "/list": [{
        adminPassword: string,
        product: ProductData
    }, errcode: Bridge.MaybeError]
    "/delist": [{
        adminPassword: string,
        productKey: string
    }, errcode: Bridge.MaybeError]
    "/set_stock": [{
        adminPassword: string,
        productKey: string,
        productAmount: number
    }, errcode: Bridge.MaybeError],
    "/increase_stock": [{
        adminPassword: string,
        productKey: string,
        productAmount: number
    }, errcode: Bridge.MaybeError],
    "/decrease_stock": [{
        adminPassword: string,
        productKey: string,
        productAmount: number
    }, errcode: Bridge.MaybeError],
    "/set_price": [{
        adminPassword: string,
        productKey: string,
        productAmount: number
    }, errcode: Bridge.MaybeError],
    "/increase_price": [{
        adminPassword: string,
        productKey: string,
        productAmount: number
    }, errcode: Bridge.MaybeError],
    "/decrease_price": [{
        adminPassword: string,
        productKey: string,
        productAmount: number
    }, errcode: Bridge.MaybeError],
    "/checkout": [{
        orders: Array<OrderData>
    }, {
        url: string,
        errcode: Bridge.MaybeError
    }]
}>();

export namespace Bridge {
    export type MaybeError = Bridge.Error | null;

    export type Error =
        | "Bridge.InvalidRequest"
        | "Bridge.InvalidResponse"
        | "Bridge.UsernameNotAvailable"
        | "Bridge.EmptyOrders"
        | "Bridge.PaymentProviderUnavailable"
        | "Bridge.PaymentProviderSessionUrlUnavailable";
}