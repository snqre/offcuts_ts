import * as Web from "@web";

export type NavbarPartialPrebuildProps = 
    & Web.React.ComponentPropsWithRef<"div">
    & {
    materials: Web.State<Array<string>>;
    materialFocus: Web.State<string>;
    products: Web.State<Array<Web.ProductData>>;
    productFocus: Web.State<string>;
    user: Web.State<Web.UserData | null>;
    userIsSignedIn: Web.State<boolean>;
};

export function NavbarPartialPrebuild({
    materials,
    materialFocus,
    products,
    productFocus,
    user,
    userIsSignedIn,
    ...more
}: NavbarPartialPrebuildProps): Web.React.ReactNode {
    let materialsDropDownButtonToggled: Web.State<boolean> = Web.React.useState<boolean>(false);
    let searchBarToggled: Web.State<boolean> = Web.React.useState<boolean>(false);
    let searchBarInput: Web.State<string> = Web.React.useState<string>("");
    let searchBarSuggestions: Web.State<Array<Web.ProductData>> = Web.React.useState<Array<Web.ProductData>>([]);
    let signInSignUpButtonToggled: Web.State<boolean> = Web.React.useState<boolean>(false);
    let signUpToggled: Web.State<boolean> = Web.React.useState<boolean>(false);
    let signInToggled: Web.State<boolean> = Web.React.useState<boolean>(false);
    let signInFormUsernameInput: Web.State<string> = Web.React.useState<string>("");
    let signInFormPasswordInput: Web.State<string> = Web.React.useState<string>("");
    let signInFormIsValidInput: Web.State<boolean> = Web.React.useState<boolean>(false);
    let signInFormResponse: Web.State<unknown> = Web.React.useState<unknown>(null);

    return <Web.Navbar
        materials={materials}
        materialFocus={materialFocus}
        materialsDropDownButtonToggled={materialsDropDownButtonToggled}
        products={products}
        productFocus={productFocus}
        searchBarToggled={searchBarToggled}
        searchBarInput={searchBarInput}
        searchBarSuggestions={searchBarSuggestions}
        signInSignUpButtonToggled={signInSignUpButtonToggled}
        signUpToggled={signUpToggled}
        signInToggled={signInToggled}
        signUpForm={}
        signInForm={<Web.NavbarSignInForm
            usernameInput={signInFormUsernameInput}
            passwordInput={signInFormPasswordInput}
            isValidInput={signInFormIsValidInput}
            response={signInFormResponse}
            user={user}
            userIsSignedIn={userIsSignedIn}
            />}
        {...more}/>;
}