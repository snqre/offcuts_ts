import {
    type ReactNode,
    type State,
    type AsyncClosure,
    type FormProps,
    Form,
    FormInput,
    FormButton,
    FormMessage
} from "@web";

export type NavSignUpFormSignUpAction = AsyncClosure<[
    username: string,
    password: string,
    email: string
], [
    success: boolean,
    message: string | null
]>;

export type NavSignUpFormValidateAction = AsyncClosure<[
    username: string,
    password: string,
    email: string
], [
    success: boolean,
    message: string | null
]>;

export type NavSignUpFormProps =
    & Omit<FormProps, "children">
    & {
    username: State<string>,
    password: State<string>,
    email: State<string>,
    response: State<string | null>,
    onValidation: NavSignUpFormValidateAction,
    onSignUp: NavSignUpFormSignUpAction
};

export function NavSignUpForm({
    username,
    password,
    email,
    response,
    onValidation,
    onSignUp,
    ...more
}: NavSignUpFormProps): ReactNode {
    return <>
        <Form
            {...more}>
            {response[0] ? <>
                <FormMessage>
                    {response[0]}
                </FormMessage>
            </> : undefined}
            <FormInput 
                value={email[0]} 
                placeholder="Email" 
                onChange={e => email[1](e.target.value)}/>
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
                    [success, message] = (await onValidation(username[0], password[0], email[0]));
                    if (success === false) {
                        response[1](message);
                        return;
                    }
                    [success, message] = (await onSignUp(username[0], password[0], email[0]));
                    if (success === false) {
                        response[1](message);
                        return;
                    }
                    response[1](null);
                    return;
                }}>
                Sign Up
            </FormButton>
        </Form>
    </>;
}