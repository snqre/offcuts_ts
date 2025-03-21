import {
    type RedisStorage,
    type ProductData,
    type AppData,
    Result as Result$,
    Ok,
    Err
} from "@host";

export type Shop = {
    hasProduct(key: string): Promise<Shop.Result<boolean>>,
    productsByMaterial(material: string): Promise<Shop.Result<Array<ProductData>>>,
    productsByKey(key: string): Promise<Shop.Result<Array<ProductData>>>,
    products(): Promise<Shop.Result<Array<ProductData>>>,
    setStock(key: string, amount: bigint): Promise<Shop.Result<void>>,
    increaseStock(key: string, amount: bigint): Promise<Shop.Result<void>>,
    decreaseStock(key: string, amount: bigint): Promise<Shop.Result<void>>,
    setPrice(key: string, amount: number): Promise<Shop.Result<void>>,
    increasePrice(key: string, amount: number): Promise<Shop.Result<void>>,
    decreasePrice(key: string, amount: number): Promise<Shop.Result<void>>,
    list(product: ProductData): Promise<Shop.Result<void>>,
    delist(key: string): Promise<Shop.Result<void>>
};

export function Shop(_db: RedisStorage): Shop {
    /** @constructor */ {
        return {
            hasProduct,
            productsByMaterial, 
            productsByKey, 
            products,
            setStock,
            increaseStock,
            decreaseStock,
            setPrice,
            increasePrice,
            decreasePrice,
            list,
            delist
        };
    }

    async function hasProduct(key: string): Promise<Shop.Result<boolean>> {
        return (await products()).map(products => products.filter(product => product.key === key).length !== 0);
    }

    async function productsByMaterial(material: string): Promise<Shop.Result<Array<ProductData>>> {
        return (await products()).map(products => products.filter(product => product.material === material));
    }

    async function productsByKey(key: string): Promise<Shop.Result<Array<ProductData>>> {
        return (await products()).map(products => products.filter(product => product.key === key));
    }

    async function products(): Promise<Shop.Result<Array<ProductData>>> {
        return (await _db.get()).map(app => app.products);
    }

    async function setStock(key: string, amount: bigint): Promise<Shop.Result<void>> {
        if (key.trim().length === 0) {
            return Err("Shop.InvalidKey");
        }
        if (amount < 0n) {
            return Err("Shop.AmountBelowZero");
        }
        let app: Shop.Result<AppData> = (await _db.get());
        if (app.err) {
            return app;
        }
        let app$: AppData = app.safeUnwrap();
        return (await _db.set({
            ...app$,
            products: app$.products
                .filter(product => {
                    return product.key === key;
                })
                .map(product => {
                    product.stock = Number(amount);
                    return product;
                })
        }));
    }

    async function increaseStock(key: string, amount: bigint): Promise<Shop.Result<void>> {
        if (key.trim().length === 0) {
            return Err("Shop.InvalidKey");
        }
        if (amount < 0n) {
            return Err("Shop.AmountBelowZero");
        }
        let app: Shop.Result<AppData> = (await _db.get());
        if (app.err) {
            return app;
        }
        let app$: AppData = app.safeUnwrap();
        return (await _db.set({
            ...app$,
            products: app$.products.filter(product => product.key === key).map(product => {product.stock += Number(amount); return product})
        }));
    }

    async function decreaseStock(key: string, amount: bigint): Promise<Shop.Result<void>> {
        if (key.trim().length === 0) {
            return Err("Shop.InvalidKey");
        }
        if (amount < 0n) {
            return Err("Shop.AmountBelowZero");
        }
        let app: Shop.Result<AppData> = (await _db.get());
        if (app.err) {
            return app;
        }
        let app$: AppData = app.safeUnwrap();
        return (await _db.set({
            ...app$,
            products: app$.products.filter(product => product.key === key).map(product => {product.stock -= Number(amount); return product})
        }));
    }

    async function setPrice(key: string, amount: number): Promise<Shop.Result<void>> {
        if (key.trim().length === 0) {
            return Err("Shop.InvalidKey");
        }
        if (amount < 0) {
            return Err("Shop.AmountBelowZero");
        }
        let app: Shop.Result<AppData> = (await _db.get());
        if (app.err) {
            return app;
        }
        let app$: AppData = app.safeUnwrap();
        return (await _db.set({
            ...app$,
            products: app$.products
                .filter(product => {
                    return product.key === key;
                })
                .map(product => {
                    product.price = amount;
                    return product;
                })
        }));
    }

    async function increasePrice(key: string, amount: number): Promise<Shop.Result<void>> {
        if (key.trim().length === 0) {
            return Err("Shop.InvalidKey");
        }
        if (amount < 0n) {
            return Err("Shop.AmountBelowZero");
        }
        let app: Shop.Result<AppData> = (await _db.get());
        if (app.err) {
            return app;
        }
        let app$: AppData = app.safeUnwrap();
        return (await _db.set({
            ...app$,
            products: app$.products.filter(product => product.key === key).map(product => {product.price += amount; return product})
        }));
    }

    async function decreasePrice(key: string, amount: number): Promise<Shop.Result<void>> {
        if (key.trim().length === 0) {
            return Err("Shop.InvalidKey");
        }
        if (amount < 0n) {
            return Err("Shop.AmountBelowZero");
        }
        let app: Shop.Result<AppData> = (await _db.get());
        if (app.err) {
            return app;
        }
        let app$: AppData = app.safeUnwrap();
        return (await _db.set({
            ...app$,
            products: app$.products.filter(product => product.key === key).map(product => {product.price -= amount; return product})
        }));
    }

    async function list(product: ProductData): Promise<Shop.Result<void>> {
        let app: Shop.Result<AppData> = (await _db.get());
        if (app.err) {
            return app;
        }
        let app$: AppData = app.safeUnwrap();
        app$.products.push(product);
        return (await _db.set(app$));
    }

    async function delist(key: string): Promise<Shop.Result<void>> {
        let app: Shop.Result<AppData> = (await _db.get());
        if (app.err) {
            return app;
        }
        let app$: AppData = app.safeUnwrap();
        app$.products
            .filter(product => product.key === key)
            .forEach((_, k) => app$.products.splice(k, 1));
        return (await _db.set(app$));
    }
}

export namespace Shop {
    
    export type Result<T1> = Result$<T1, Error>;

    export type Error =
        | RedisStorage.Error
        | "Shop.InvalidKey"
        | "Shop.AmountBelowZero";
}