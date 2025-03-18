import {
    type ReactNode,
    type State,
    type UserData,
    type NavSignerDropDownButtonProps,
    NavSignerDropDownButton,
    NavSignUpForm,
    NavSignInForm,
    useState,
    post
} from "@web";

export type NavSignerDropDownButtonPartialBuildProps = 
    & Omit<NavSignerDropDownButtonProps,
        | "toggled"
        | "signUpToggled"
        | "signInToggled"
        | "signUpForm"
        | "signInForm">
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
                        if ((await post<boolean>("/is_available_username", username)) === false) {
                            return [false, "Username already taken."];
                        }
                        return [true, null];
                    }}
                    onSignUp={async (username, password, email) => {
                        
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

                    }}
                    onSignIn={async (username, password) => {

                    }}/>
            </>}
            {...more}/>
    </>;
}

