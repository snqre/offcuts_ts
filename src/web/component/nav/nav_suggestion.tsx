import {
    ComponentPropsWithRef,
    ReactNode,
    State,
    ProductData,
    Link,
    Font,
    Color
} from "@web";

export type NavSuggestionProps =
    & Omit<ComponentPropsWithRef<"div">, "children">
    & {
    products: State<Array<ProductData>>;
    productFocus: State<ProductData>;
    suggested: ProductData;
    to: string;
};

export function NavSuggestion({
    products,
    productFocus,
    suggested,
    to,
    style,
    ...more
}: NavSuggestionProps): ReactNode {
    return <>
        <Link
            style={{
                display: "contents"
            }}
            to={to}>
            <div
                onClick={() => {
                    let products0: Array<ProductData> = products[0];
                    let product: ProductData | null = products0
                        .filter(product0 => product0.name === suggested?.name)
                        .at(0) || null;
                    if (product) {
                        productFocus[1](product);
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
                        color: Color[0],
                        fontSize: "1em",
                        fontWeight: "normal",
                        fontFamily: Font[1]
                    }}>
                    {suggested.name}
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
                        color: Color[0],
                        fontSize: "1em",
                        fontWeight: "normal",
                        fontFamily: Font[1]
                    }}>
                    £{suggested.price
                        .toFixed(2)
                        .toString()}
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
                        color: Color[0],
                        fontSize: "1em",
                        fontWeight: "normal",
                        fontFamily: Font[1]
                    }}>
                    {suggested.stock.toFixed(0)} left
                </div>
            </div>
        </Link>
    </>;
}