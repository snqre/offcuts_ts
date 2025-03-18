import {
    ReactNode,
    ComponentPropsWithRef
} from "@web";

export type NavButtonGroupProps =
    & ComponentPropsWithRef<"div">
    & {};

export function NavButtonGroup({style, children, ...more}: NavButtonGroupProps): ReactNode {
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