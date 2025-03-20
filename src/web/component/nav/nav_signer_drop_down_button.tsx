import {
    type ComponentPropsWithRef,
    type ReactNode,
    type State,
    NavButton
} from "@web";

export type NavSignerDropDownButtonProps =
    & Omit<ComponentPropsWithRef<"div">, "children">
    & {
    toggled: State<boolean>,
    signUpToggled: State<boolean>,
    signInToggled: State<boolean>,
    signUpForm: ReactNode,
    signInForm: ReactNode
};

export function NavSignerDropDownButton({
    toggled,
    signUpToggled,
    signInToggled,
    signUpForm,
    signInForm,
    style,
    ...more
}: NavSignerDropDownButtonProps): ReactNode {
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
            <NavButton
                onClick={() => {
                    toggled[1](true);
                    signInToggled[1](false);
                    signUpToggled[1](true);
                    return;
                }}>
                Sign Up
            </NavButton>
            <NavButton
                onClick={() => {
                    toggled[1](true);
                    signInToggled[1](true);
                    signUpToggled[1](false);
                }}
                style={{
                    fontSize: "0.75em"
                }}>
                Sign In
            </NavButton>
            {toggled[0] ? <>
                <div
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
                    {signInToggled[0] ? signInForm : signUpToggled[0] ? signUpForm : undefined}
                </div>
            </> : undefined}
        </div>
    </>;
}