import {
    type ReactNode,
    type PageProps,
    type Closure,
    type ProductData,
    Page,
    TerminalPartialBuild,
    Bridge
} from "@web";

export function TerminalPage(): ReactNode {
    return <>
        <Page>
            <TerminalPartialBuild
                onEval={async commands => {
                    if (commands.length === 0) {
                        return [];
                    }
                    let ok: ["Ok"] = ["Ok"];
                    let selector: string = commands[0];
                    let selectorToClosureRecord: Record<string, Closure<[], Promise<Array<string>>>> = {
                        "help": async () => [
                            "materials",
                            "products_with_material|material",
                            "products",
                            "set_price|admin_password|product_key|amount",
                            "set_stock|admin_password|product_key|amount"
                        ],
                        "materials": async () => (await Bridge.touch("/materials", null)),
                        "products_with_material": async () => (await Bridge.touch("/products_by_material", commands[1])).map(product => [
                            `Key: ${product.key}`,
                            `Name: ${product.name}`,
                            `Description: ${product.description}`,
                            `Price: ${product.price}`,
                            `Stock: ${product.stock}`,
                            `Material: ${product.material}`,
                            `Image Url: ${product.imageUrl}`
                        ].join("\n")),
                        "products": async () => (await Bridge.touch("/products", null)).map(product => [
                            `Key: ${product.key}`,
                            `Name: ${product.name}`,
                            `Description: ${product.description}`,
                            `Price: ${product.price}`,
                            `Stock: ${product.stock}`,
                            `Material: ${product.material}`,
                            `Image Url: ${product.imageUrl}`
                        ].join("\n")),
                        "set_price": async () => {
                            let errcode = (await Bridge.touch("/set_price", {
                                adminPassword: commands[1],
                                productKey: commands[2],
                                productAmount: Number(commands[3])
                            }));
                            if (errcode) {
                                throw errcode;
                            }
                            return ok;
                        },
                        "set_stock": async () => {
                            let errcode = (await Bridge.touch("/set_stock", {
                                adminPassword: commands[1],
                                productKey: commands[2],
                                productAmount: Number(BigInt(commands[3]))
                            }));
                            if (errcode) {
                                throw errcode;
                            }
                            return ok;
                        },
                        "list_product": async () => {
                            let password: string = commands[1];
                            let productKey: string = commands[2];
                            let productName: string = commands[3];
                            let productPrice: number = Number(commands[4]);
                            let productStock: number = Number(BigInt(commands[5]));
                            let productMaterial: string = commands[6];
                            let productImageUrl: string = commands[6];
                            let productDescription: string = commands[7];
                            let product: ProductData = {
                                key: productKey,
                                name: productName,
                                description: productDescription,
                                price: productPrice,
                                stock: productStock,
                                material: productMaterial,
                                imageUrl: productImageUrl
                            };
                            let errcode = (await Bridge.touch("/list", {
                                adminPassword: password,
                                product: product
                            }));
                            if (errcode) {
                                throw errcode;
                            }
                            return ok;
                        },
                        "list_product_without_image_url": async () => {
                            let password: string = commands[1];
                            let productKey: string = commands[2];
                            let productName: string = commands[3];
                            let productPrice: number = Number(commands[4]);
                            let productStock: number = Number(BigInt(commands[5]));
                            let productMaterial: string = commands[6];
                            let productDescription: string = commands[7];
                            let product: ProductData = {
                                key: productKey,
                                name: productName,
                                description: productDescription,
                                price: productPrice,
                                stock: productStock,
                                material: productMaterial
                            };
                            let errcode = (await Bridge.touch("/list", {
                                adminPassword: password,
                                product: product
                            }));
                            if (errcode) {
                                throw errcode;
                            }
                            return ok;
                        }
                    };
                    try {
                        return (await selectorToClosureRecord[selector]());
                    }
                    catch (e) {
                        return [String(e)];
                    }
                }}/>
        </Page>        
    </>;
}