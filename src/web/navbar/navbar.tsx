import * as Web from "@web";

export type NavbarProps = 
    & Web.React.ComponentPropsWithRef<"div">
    & {
    materials: Web.State<Array<string>>;
    materialFocus: Web.State<string>;
    materialsDropDownButtonToggled: Web.State<boolean>;
    products: Web.State<Array<Web.ProductData>>;
    productFocus: Web.State<string>;
    searchBarToggled: Web.State<boolean>;
    searchBarInput: Web.State<string>;
    searchBarSuggestions: Web.State<Array<Web.ProductData>>;
    signInSignUpButtonToggled: Web.State<boolean>;
    signUpToggled: Web.State<boolean>;
    signInToggled: Web.State<boolean>;
    signUpForm: Web.React.ReactNode;
    signInForm: Web.React.ReactNode;
};

export function Navbar({
    materials, 
    materialFocus,
    materialsDropDownButtonToggled,
    products, 
    productFocus, 
    searchBarToggled,
    searchBarInput,
    searchBarSuggestions,
    signInSignUpButtonToggled,
    signUpToggled,
    signInToggled,
    signUpForm,
    signInForm,
    style, 
    ...more
}: NavbarProps): Web.React.ReactNode {
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
                zIndex: 9999,
                ...style
            }}
            {...more}>
            <Web.NavbarLogo/>
            <Web.NavbarButtonGroup>
                <Web.NavbarCallToActionButton
                    to="/for_you">
                    For You
                </Web.NavbarCallToActionButton>
                <Web.NavbarMaterialsDropDownButton
                    materials={materials}
                    materialFocus={materialFocus}
                    toggled={materialsDropDownButtonToggled}>
                    Materials
                </Web.NavbarMaterialsDropDownButton>
            </Web.NavbarButtonGroup>
            <Web.NavbarSearchBar
                products={products}
                productFocus={productFocus}
                toggled={searchBarToggled}
                input={searchBarInput}
                suggestions={searchBarSuggestions}/>
            <Web.NavbarButtonGroup>
                <Web.ReactRouterDOM.Link
                    to="/basket">
                    <Web.NavbarButton>
                        Basket
                    </Web.NavbarButton>
                </Web.ReactRouterDOM.Link>
                <Web.NavbarSignInAndSignUpButton
                    toggled={signInSignUpButtonToggled}
                    signUpToggled={signUpToggled}
                    signInToggled={signInToggled}
                    signUpForm={signUpForm}
                    signInForm={signInForm}/>
            </Web.NavbarButtonGroup>
        </div>
    </>;
}