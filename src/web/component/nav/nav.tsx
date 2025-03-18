import {
    type ComponentPropsWithRef,
    type ReactNode,
    type State,
    type ProductData,
    type UserData,
    NavLogo,
    NavButton,
    NavButtonGroup,
    NavCallToActionButton,
    NavMaterialsDropDownButton,
    NavSearchBarPartialBuild,
    NavSignerDropDownButtonPartialBuild,
    Link
} from "@web";

export type NavProps =
    & ComponentPropsWithRef<"div">
    & {
    materials: State<Array<string>>,
    materialFocus: State<string>,
    materialsDropDownButtonToggled: State<boolean>,
    products: State<Array<ProductData>>,
    productFocus: State<ProductData | null>,
    searchBarToggled: State<boolean>,
    searchBarInput: State<string>,
    user: State<UserData | null>,
    userIsSignedIn: State<boolean>
};

export function Nav({
    materials,
    materialFocus,
    materialsDropDownButtonToggled,
    products,
    productFocus,
    searchBarToggled,
    searchBarInput,
    user,
    userIsSignedIn,
    style,
    ...more
}: NavProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "auto",
                flex: 1,
                paddingTop: 30,
                paddingBottom: 30,
                gap: 40,
                zIndex: 2000,
                ...style
            }}
            {...more}>
            <NavLogo/>
            <NavButtonGroup>
                <NavCallToActionButton
                    to="/for_you">
                    For You
                </NavCallToActionButton>
                <NavMaterialsDropDownButton
                    materials={materials}
                    materialFocus={materialFocus}
                    toggled={materialsDropDownButtonToggled}/>
            </NavButtonGroup>
            <NavSearchBarPartialBuild
                products={products}
                productFocus={productFocus}/>
            <NavButtonGroup>
                <Link
                    to="/basket">
                    <NavButton>
                        Basket
                    </NavButton>
                </Link>
                <NavSignerDropDownButtonPartialBuild
                    user={user}
                    userIsSignedIn={userIsSignedIn}/>
            </NavButtonGroup>
        </div>
    </>;
}