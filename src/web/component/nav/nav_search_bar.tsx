import {
    type ComponentPropsWithRef,
    type ReactNode,
    type State,
    type ProductData,
    SHADOW,
    SEARCH_BAR_ICON,
    NavSuggestion,
    SpriteIcon,
    Font,
    useEffect,
    sort
} from "@web";

export type NavSearchBarProps =
    & Omit<ComponentPropsWithRef<"div">, "children">
    & {
    products: State<Array<ProductData>>;
    productFocus: State<ProductData>;
    toggled: State<boolean>;
    input: State<string>;
    suggestions: State<Array<ProductData>>;
};

export function NavSearchBar({
    products,
    productFocus,
    toggled,
    input,
    suggestions,
    style,
    ...more
}: NavSearchBarProps): ReactNode {
    
    useEffect(() => {
        let input_: string = input[0];
        if (input_.trim().length === 0) {
            toggled[1](true);
            return;
        }
        let suggestions_: Array<ProductData> = products[0];
        suggestions_
            .map(product => ({...product, score: sort(input_, product.name?.toLocaleLowerCase() || "")}))
            .sort((x, y) => x.score - y.score)
            .slice(0, 10);
        suggestions[1](suggestions_);
        toggled[1](true);
        return;
    }, [input[0]]);

    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                width: "100%",
                height: "auto",
                flex: "1",
                ...style
            }}
            {...more}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "auto",
                    boxShadow: SHADOW,
                    padding: 10,
                    flex: 1,
                    gap: 10,
                }}>
                <SpriteIcon
                    url={SEARCH_BAR_ICON}
                    style={{
                        width: "15px"
                    }}/>
                <input
                    value={input[0]}
                    onChange={e => input[1](e.target.value)}
                    style={{
                        all: "unset",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                        width: "100%",
                        height: "auto",
                        flex: 1,
                        fontSize: "0.75em",
                        fontWeight: "normal",
                        fontFamily: Font[1]
                    }}/>
            </div>
            {toggled[0] ? <>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "center",
                        position: "absolute",
                        top: "100%",
                        width: "100%",
                        height: "auto",
                        flex: 1,
                        boxShadow: SHADOW,
                        background: "white"
                    }}>
                    {suggestions[0].map(suggestion => <>
                        <NavSuggestion
                            to="/product"
                            products={products}
                            productFocus={productFocus}
                            suggested={suggestion}/>
                    </>)}
                </div>
            </> : undefined}
        </div>
    </>;
}