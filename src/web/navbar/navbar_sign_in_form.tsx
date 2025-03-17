import * as Web from "@web";

export type NavbarSignInFormOnSignInAction = (username: string, password: string) => Promise<Web.UserData>;

export type NavbarSignInFormProps =
    & Omit<Web.FormProps, "children">
    & {
    usernameInput: Web.State<string>;
    passwordInput: Web.State<string>;
    isValidInput: Web.State<boolean>;
    user: Web.State<Web.UserData | null>;
    userIsSignedIn: Web.State<boolean>;
    onSignIn: NavbarSignInFormOnSignInAction;
};

export function NavbarSignInForm({
    usernameInput,
    passwordInput,
    isValidInput,
    user,
    userIsSignedIn,
    onSignIn,
    ...more
}: NavbarSignInFormProps): Web.React.ReactNode {

    return <Web.Form
        {...more}>
        {userIsSignedIn[0] ? <div>
            You are already signed in.
        </div> : <>
            <Web.FormInput
                value={usernameInput[0]}
                placeholder="Username"
                onChange={e => usernameInput[1](e.target.value)}/>
            <Web.FormInput
                value={passwordInput[0]}
                placeholder="Password"
                onChange={e => passwordInput[1](e.target.value)}/>
            <Web.FormButton
                onClick={async () => {
                    if (isValidInput[0]) {
                        try {
                            user[1]((await onSignIn(usernameInput[0], passwordInput[0])));
                            userIsSignedIn[1](true);
                        }
                        catch {}
                        return;
                    }
                }}>
                Sign In
            </Web.FormButton>
        </>}
    </Web.Form>;
}