import {
    type ComponentPropsWithRef,
    type ReactNode,
    NavCallToActionButtonIcon,
    NavButton,
    Link,
    Color
} from "@web";

export type NavCallToActionButtonProps =
    & ComponentPropsWithRef<"div">
    & {
    to: string;
};

export function NavCallToActionButton({to, style, children, ...more}: NavCallToActionButtonProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                position: "relative",
                background: Color[0],
                borderRadius: "10px",
                ...style
            }}>
            <NavCallToActionButtonIcon
                style={{
                    position: "absolute",
                    right: "100%",
                    bottom: "100%"
                }}/>
            <Link
                to={to}>
                <NavButton
                    childStyle={{
                        color: Color[1]
                    }}>
                    {children}
                </NavButton>
            </Link>
        </div>
    </>;
}