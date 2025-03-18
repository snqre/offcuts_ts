import {
    type ReactNode,
} from "@web";

export type NavbarButtonGroupProps =
    & Web.React.ComponentPropsWithRef<"div">
    & {};

export function NavbarButtonGroup({style, children, ...more}: NavbarButtonGroupProps): Web.React.ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                gap: 10,
                ...style
            }}
            {...more}>
            {children}
        </div>
    </>;
}