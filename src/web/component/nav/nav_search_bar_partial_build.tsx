import {
    type ReactNode,
    type NavSearchBarProps,
    type State,
    type ProductData,
    NavSearchBar,
    useState
} from "@web";

export type NavSearchBarPartialBuildProps =
    & Omit<NavSearchBarProps, 
        | "products"
        | "productFocus"
        | "toggled"
        | "input"
        | "suggestions">
    & {
    products: State<Array<ProductData>>;
    productFocus: State<ProductData>;
};

export function NavSearchBarPartialBuild({
    products,
    productFocus,
    ...more
}: NavSearchBarPartialBuildProps): ReactNode {
    let toggled: State<boolean> = useState<boolean>(false);
    let input: State<string> = useState<string>("");
    let suggestions: State<Array<ProductData>> = useState<Array<ProductData>>([]);

    return <>
        <NavSearchBar
            products={products}
            productFocus={productFocus}
            toggled={toggled}
            input={input}
            suggestions={suggestions}
            {...more}/>
    </>;
}