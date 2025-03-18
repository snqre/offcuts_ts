import {
    type State,
    type ComponentPropsWithRef,
    type ReactNode,
    type ProductData,
    type UserData,
    type NavbarSignUpFormOnSignUpAction,
    type NavbarSignInFormOnSignInAction,
    Navbar,
    NavbarSignInForm,
    NavbarSignUpForm,
    useState,
} from "@web";

export type NavbarPartialBuildProps = 
    & ComponentPropsWithRef<"div">
    & {
    materials: State<Array<string>>;
    materialFocus: State<string>;
    products: State<Array<ProductData>>;
    productFocus: State<string>;
    user: State<UserData | null>;
    userIsSignedIn: State<boolean>;
    onSignUp: NavbarSignUpFormOnSignUpAction;
    onSignIn: NavbarSignInFormOnSignInAction;
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
}: NavbarPartialBuildProps): ReactNode {
    let materialsDropDownButtonToggled: State<boolean> = useState<boolean>(false);
    let searchBarToggled: State<boolean> = useState<boolean>(false);
    let searchBarInput: State<string> = useState<string>("");
    let searchBarSuggestions: State<Array<ProductData>> = useState<Array<ProductData>>([]);
    let signUpFormUsernameInput: State<string> = useState<string>("");
    let signUpFormPasswordInput: State<string> = useState<string>("");
    let signUpFormEmailInput: State<string> = useState<string>("");
    let signInSignUpButtonToggled: State<boolean> = useState<boolean>(false);
    let signUpToggled: State<boolean> = useState<boolean>(false);
    let signInToggled: State<boolean> = useState<boolean>(false);
    let signInFormUsernameInput: State<string> = useState<string>("");
    let signInFormPasswordInput: State<string> = useState<string>("");
    let signInFormIsValidInput: State<boolean> = useState<boolean>(false);

    return <>
        <Navbar
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
                <NavbarSignUpForm
                    usernameInput={signUpFormUsernameInput}
                    passwordInput={signUpFormPasswordInput}
                    emailInput={signUpFormEmailInput}
                    onSignUp={onSignUp}/>
            </>}
            signInForm={<>
                <NavbarSignInForm
                    usernameInput={signInFormUsernameInput}
                    passwordInput={signInFormPasswordInput}
                    isValidInput={signInFormIsValidInput}
                    user={user}
                    userIsSignedIn={userIsSignedIn}
                    onSignIn={onSignIn}/>
            </>}
            {...more}/>
    </>;
}