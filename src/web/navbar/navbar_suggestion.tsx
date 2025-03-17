import * as Web from "@web";

export type NavbarSuggestionProps =
    & Omit<Web.React.ComponentPropsWithRef<"div">, "children">
    & {
    products: Web.State<Array<Web.ProductData>>;
    productFocus: Web.State<string>;
    product: Web.ProductData;
};

export function NavbarSuggestion({products, productFocus, product, style, ...more}: NavbarSuggestionProps): Web.React.ReactNode {    
    return <>
        <Web.ReactRouterDOM.Link
            style={{
                display: "contents"
            }}
            to="/product">
            <div
                onClick={() => {
                    let product: Web.ProductData | null = products[0].filter(product0 => product0?.name === product?.name).at(0) || null;
                    if (product) {
                        productFocus[1](product.key);
                    }
                    return;
                }}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    height: "auto",
                    flex: 1,
                    padding: 8,
                    cursor: "pointer",
                    ...style
                }}
                {...more}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "100%",
                        height: "auto",
                        flex: 1,
                        color: Web.Theme.DARK_COLOR,
                        fontSize: "1em",
                        fontWeight: "normal",
                        fontFamily: Web.Theme.FONT_1
                    }}>
                    {product.name}
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "100%",
                        height: "auto",
                        flex: 1,
                        color: Web.Theme.DARK_COLOR,
                        fontSize: "1em",
                        fontWeight: "normal",
                        fontFamily: Web.Theme.FONT_1
                    }}>
                    £{product.price.toFixed(2).toString()}
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "100%",
                        height: "auto",
                        flex: 1,
                        color: Web.Theme.DARK_COLOR,
                        fontSize: "1em",
                        fontWeight: "normal",
                        fontFamily: Web.Theme.FONT_1
                    }}>
                    {product.stock.toFixed(0)} left
                </div>
            </div>
        </Web.ReactRouterDOM.Link>
    </>;
}