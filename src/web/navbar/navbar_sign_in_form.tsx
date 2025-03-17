import * as Web from "@web";

export type NavbarSignInFormProps =
    & Omit<Web.FormProps, "children">
    & {
    usernameInput: Web.State<string>;
    passwordInput: Web.State<string>;
    isValidInput: Web.State<boolean>;
    response: Web.State<unknown>;
    user: Web.State<Web.UserData | null>;
    userIsSignedIn: Web.State<boolean>;
};

export function NavbarSignInForm({
    usernameInput,
    passwordInput,
    isValidInput,
    response,
    user,
    userIsSignedIn,
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
                        let {user: user0, message, e} = Web.Zod.object({
                            user: Web.UserDataSchema.or(Web.Zod.null()),
                            message: Web.Zod.string().or(Web.Zod.null()),
                            e: Web.Zod.unknown()
                        }).parse(((await Web.Axios.post("/sign_in", {username: usernameInput[0], password: passwordInput[0]})).data));
                        if (e) {
                            response[1](e);
                            return;
                        }
                        if (message && message !== "Ok") {
                            response[1](message);
                            return;
                        }
                        if (user === null) {
                            response[1]("USER_DATA_NOT_AVAILABLE");
                            return;
                        }
                        user[1](user0);
                        userIsSignedIn[1](true);
                        return;
                    }
                }}>
                Sign In
            </Web.FormButton>
        </>}
    </Web.Form>;
}