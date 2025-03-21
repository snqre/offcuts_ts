import {
    type ReactNode,
    type State,
    type UserData,
    type NavSignerDropDownButtonProps,
    NavSignerDropDownButton,
    NavSignUpForm,
    NavSignInForm,
    Bridge,
    useState,
    require
} from "@web";

export type NavSignerDropDownButtonPartialBuildProps = 
    & Omit<
        NavSignerDropDownButtonProps,
        | "toggled"
        | "signUpToggled"
        | "signInToggled"
        | "signUpForm"
        | "signInForm"
        >
    & {
    user: State<UserData | null>,
    userIsSignedIn: State<boolean>
};

export function NavSignerDropDownButtonPartialBuild({
    user,
    userIsSignedIn,
    ...more
}: NavSignerDropDownButtonPartialBuildProps): ReactNode {
    let toggled: State<boolean> = useState(false);
    let signUpToggled: State<boolean> = useState(false);
    let signInToggled: State<boolean> = useState(false);
    let username: State<string> = useState("");
    let password: State<string> = useState("");
    let email: State<string> = useState("");

    // @ts-ignore
    let response: State<string | null> = useState(null);

    return <>
        <NavSignerDropDownButton
            toggled={toggled}
            signUpToggled={signUpToggled}
            signInToggled={signInToggled}
            signUpForm={<>
                <NavSignUpForm
                    username={username}
                    password={password}
                    email={email}
                    response={response}
                    onValidation={async (username, password, email) => {
                        try {
                            require(username.trim().length !== 0, "");
                            require(password.trim().length !== 0, "");
                            require(email.trim().length !== 0, "");
                            return [true, null];
                        }
                        catch (e: unknown) {
                            return [false, String(e)];
                        }
                    }}
                    onSignUp={async (username, password, email) => {
                        if ((await Bridge.touch("/username_is_available", {
                            username: username
                        })).success) {
                            let errcode: Bridge.Error | null = (await Bridge.touch("/sign_up", {
                                username: username,
                                password: password,
                                email: email
                            }));
                            if (errcode) {
                                return [false, errcode];
                            }
                            return [true, null];
                        }
                        return [false, null];
                    }}/>
            </>}
            signInForm={<>
                <NavSignInForm
                    username={username}
                    password={password}
                    response={response}
                    user={user}
                    userIsSignedIn={userIsSignedIn}
                    onValidation={async (username, password) => {
                        try {
                            require(username.trim().length !== 0, "");
                            require(password.trim().length !== 0, "");
                            return [true, null];
                        }
                        catch (e) {
                            return [false, String(e)];
                        }
                    }}
                    onSignIn={async (username, password) => {
                        let errcode: Bridge.Error | null = (await Bridge.touch("/sign_in", {
                            username: username,
                            password: password
                        }));
                        if (errcode) {
                            return [false, errcode];
                        }
                        return [true, null];
                    }}/>
            </>}
            {...more}/>
    </>;
}