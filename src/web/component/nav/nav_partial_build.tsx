import {
    type ReactNode,
    type NavProps,
    type State,
    type ProductData,
    type UserData,
    Nav,
    useState
} from "@web";

export type NavPartialBuildProps = 
    & Omit<NavProps,
        | "materialsDropDownButtonToggled"
        | "searchBarToggled"
        | "searchBarInput"
        >
    & {
    materials: State<Array<string>>,
    materialFocus: State<string>,
    products: State<Array<ProductData>>,
    productFocus: State<ProductData | null>,
    user: State<UserData | null>,
    userIsSignedIn: State<boolean>
};

export function NavPartialBuild({
    materials,
    materialFocus,
    products,
    productFocus,
    user,
    userIsSignedIn
}: NavPartialBuildProps): ReactNode {
    let materialsDropDownButtonToggled: State<boolean> = useState<boolean>(false);
    let searchBarToggled: State<boolean> = useState<boolean>(false);
    let searchBarInput: State<string> = useState<string>("");

    return <>
        <Nav
            materials={materials}
            materialFocus={materialFocus}
            materialsDropDownButtonToggled={materialsDropDownButtonToggled}
            products={products}
            productFocus={productFocus}
            searchBarToggled={searchBarToggled}
            searchBarInput={searchBarInput}
            user={user}
            userIsSignedIn={userIsSignedIn}/>
    </>;
}