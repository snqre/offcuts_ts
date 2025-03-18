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
            <div
                onClick={() => {
                    toggled[1](true);
                    signInToggled[1](true);
                    signInToggled[1](false);
                }}
                style={{
                    
                }}>
                Sign In
            </div>
        </div>
    </>;
}