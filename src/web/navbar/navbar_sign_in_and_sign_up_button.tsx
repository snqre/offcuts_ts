import * as Web from "@web";

export type NavbarSignInAndSignUpButtonProps = 
    & Omit<Web.React.ComponentPropsWithRef<"div">, "children">
    & {
    toggled: Web.State<boolean>;
    signUpToggled: Web.State<boolean>;
    signInToggled: Web.State<boolean>;
    signUpForm: Web.React.ReactNode;
    signInForm: Web.React.ReactNode;
};

export function NavbarSignInAndSignUpButton({
    toggled,
    signUpToggled,
    signInToggled,
    signUpForm,
    signInForm,
    style,
    ...more
}: NavbarSignInAndSignUpButtonProps): Web.React.ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                ...style
            }}
            {...more}>
            <Web.NavbarButton
                onClick={() => {
                    toggled[1](true);
                    signInToggled[1](false);
                    signUpToggled[1](true);
                    return;
                }}>
                Sign Up
            </Web.NavbarButton>
            <div
                onClick={() => {
                    toggled[1](true);
                    signInToggled[1](true);
                    signUpToggled[1](false);
                    return;
                }}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    position: "absolute",
                    top: "120%",
                    fontSize: "0.60em",
                    fontWeight: "normal",
                    fontFamily: Web.Theme.FONT_1,
                    color: Web.Theme.DARK_COLOR
                }}>
                Sign In
            </div>
            {toggled[1] ? <div
                onMouseLeave={() => {
                    toggled[1](false);
                    signInToggled[1](false);
                    signUpToggled[1](false);
                    return;
                }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                    position: "absolute",
                    right: "-100%",
                    top: "175%",
                    minWidth: "100%",
                    width: 400
                }}>
                {signInToggled ? signInForm : signUpToggled ? signUpForm : undefined}
            </div> : undefined}
        </div>
    </>;
}