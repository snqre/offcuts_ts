import * as Web from "@web";

export type NavbarSignUpFormOnSignUpAction = (username: string, password: string, email: string) => Promise<void>;

export type NavbarSignUpFormProps = 
    & Omit<Web.FormProps, "children">
    & {
    usernameInput: Web.State<string>;
    passwordInput: Web.State<string>;
    emailInput: Web.State<string>;
    onSignUp: NavbarSignUpFormOnSignUpAction;
};

export function NavbarSignUpForm({
    usernameInput,
    passwordInput,
    emailInput,
    onSignUp,
    ...more
}: NavbarSignUpFormProps): Web.React.ReactNode {
    return <>
        <Web.Form
            {...more}>
            <Web.FormInput
                value={emailInput[0]}
                placeholder="Email"
                onChange={e => emailInput[1](e.target.value)}/>
            <Web.FormInput
                value={usernameInput[0]}
                placeholder="Username"
                onChange={e => usernameInput[1](e.target.value)}/>
            <Web.FormInput
                value={passwordInput[0]}
                placeholder="Password"
                onChange={e => passwordInput[1](e.target.value)}/>
            <Web.FormButton
                onClick={async () => (await onSignUp(usernameInput[0], passwordInput[0], emailInput[0]))}>
                Sign Up
            </Web.FormButton>
        </Web.Form>;
    </>;
}