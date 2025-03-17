import * as Web from "@web";
import ICON from "../../web/public/icon/search.png";

export type NavbarSearchBarProps =
    & Omit<Web.React.ComponentPropsWithRef<"div">, "children">
    & {
    products: Web.State<Array<Web.ProductData>>;
    productFocus: Web.State<string>;
    toggled: Web.State<boolean>;
    input: Web.State<string>;
    suggestions: Web.State<Array<Web.ProductData>>;
};

export function NavbarSearchBar({products, productFocus, toggled, input, suggestions, style, ...more}: NavbarSearchBarProps): Web.React.ReactNode {

    Web.React.useEffect(() => {
        if (input[0].trim().length !== 0) {
            toggled[1](false);
            return;
        }
        let suggestions$: Array<Web.ProductData> = products[0]
            .map(product => ({...product, score: Web.sortFromLevenshtein(input[0], product?.name?.toLocaleLowerCase())}))
            .sort((x, y) => x.score - y.score)
            .slice(0, 10);
        suggestions[1](suggestions$);
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
                flex: 1
            }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "auto",
                    boxShadow: Web.Theme.SHADOW,
                    padding: 10,
                    flex: 1,
                    gap: 10,
                    ...style
                }}
                {...more}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundImage: `url(${ICON})`,
                        backgroundPositionX: "center",
                        backgroundPositionY: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        width: 15,
                        aspectRatio: 1 / 1
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
                        fontFamily: Web.Theme.FONT_1
                    }}/>
            </div>
            {toggled ? <>
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
                        boxShadow: Web.Theme.SHADOW,
                        background: "white"
                    }}>
                    {suggestions[0].map(suggestion => <>
                        <Web.NavbarSuggestion
                            products={products}
                            productFocus={productFocus}
                            product={suggestion}/>
                    </>)}
                </div>
            </> : undefined}
        </div>
    </>;
}