import * as Web from "@web";

export type NavbarPartialBuildProps = 
    & Web.React.ComponentPropsWithRef<"div">
    & {
    materials: Web.State<Array<string>>;
    materialFocus: Web.State<string>;
    products: Web.State<Array<Web.ProductData>>;
    productFocus: Web.State<string>;
    user: Web.State<Web.UserData | null>;
    userIsSignedIn: Web.State<boolean>;
    onSignUp: Web.NavbarSignUpFormOnSignUpAction;
    onSignIn: Web.NavbarSignInFormOnSignInAction;
};

export function NavbarPartialBuild({
    materials,
    materialFocus,
    products,
    productFocus,
    user,
    userIsSignedIn,
    onSignUp,
    onSignIn,
    ...more
}: NavbarPartialBuildProps): Web.React.ReactNode {
    let materialsDropDownButtonToggled: Web.State<boolean> = Web.React.useState<boolean>(false);
    let searchBarToggled: Web.State<boolean> = Web.React.useState<boolean>(false);
    let searchBarInput: Web.State<string> = Web.React.useState<string>("");
    let searchBarSuggestions: Web.State<Array<Web.ProductData>> = Web.React.useState<Array<Web.ProductData>>([]);
    let signUpFormUsernameInput: Web.State<string> = Web.React.useState<string>("");
    let signUpFormPasswordInput: Web.State<string> = Web.React.useState<string>("");
    let signUpFormEmailInput: Web.State<string> = Web.React.useState<string>("");
    let signInSignUpButtonToggled: Web.State<boolean> = Web.React.useState<boolean>(false);
    let signUpToggled: Web.State<boolean> = Web.React.useState<boolean>(false);
    let signInToggled: Web.State<boolean> = Web.React.useState<boolean>(false);
    let signInFormUsernameInput: Web.State<string> = Web.React.useState<string>("");
    let signInFormPasswordInput: Web.State<string> = Web.React.useState<string>("");
    let signInFormIsValidInput: Web.State<boolean> = Web.React.useState<boolean>(false);

    return <>
        <Web.Navbar
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
            signUpForm={<>
                <Web.NavbarSignUpForm
                    usernameInput={signUpFormUsernameInput}
                    passwordInput={signUpFormPasswordInput}
                    emailInput={signUpFormEmailInput}
                    onSignUp={onSignUp}/>
            </>}
            signInForm={<>
                <Web.NavbarSignInForm
                    usernameInput={signInFormUsernameInput}
                    passwordInput={signInFormPasswordInput}
                    isValidInput={signInFormIsValidInput}
                    user={user}
                    userIsSignedIn={userIsSignedIn}
                    onSignIn={onSignIn}
                    />
            </>}
            {...more}/>
    </>;
}