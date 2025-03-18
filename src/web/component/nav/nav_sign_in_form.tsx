import {
    ReactNode,
    State,
    AsyncClosure,
    UserData,
    FormProps,
    Form,
    FormInput,
    FormButton,
    FormMessage
} from "@web";

export type NavSignInFromSignUpAction = AsyncClosure<[
    username: string,
    password: string
], [
    success: boolean,
    message: string | null
]>;

export type NavSignInFormValidateAction = AsyncClosure<[
    username: string,
    password: string
], [
    success: boolean,
    message: string | null
]>;

export type NavSignInFormProps = 
    & Omit<FormProps, "children">
    & {
    username: State<string>,
    password: State<string>,
    response: State<string | null>,
    user: State<UserData | null>,
    userIsSignedIn: State<boolean>,
    onValidation: NavSignInFormValidateAction,
    onSignIn: NavSignInFromSignUpAction
};

export function NavSignInForm({
    username,
    password,
    response,
    user,
    userIsSignedIn,
    onValidation,
    onSignIn,
    ...more
}: NavSignInFormProps): ReactNode {
    return <>
        <Form
            {...more}>
            <FormMessage>
                {response[0]}
            </FormMessage>
            <FormInput
                value={username[0]}
                placeholder="Username"
                onChange={e => username[1](e.target.value)}/>
            <FormInput
                value={password[0]}
                placeholder="Password"
                onChange={e => password[1](e.target.value)}/>
            <FormButton
                onClick={async () => {
                    let success: boolean;
                    let message: string | null;
                    [success, message] = (await onValidation(username[0], password[0]));
                    if (success === false) {
                        response[1](message);
                        return;
                    }
                    [success, message] = (await onSignIn(username[0], password[0]));
                    if (success === false) {
                        response[1](message);
                        return;
                    }
                    response[1](null);
                    return;
                }}>
                Sign In
            </FormButton>
        </Form>
    </>;
}