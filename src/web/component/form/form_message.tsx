import {
    type ReactNode,
    type ComponentPropsWithRef,
    Font,
    Color
} from "@web";

export type FormMessageProps =
    & ComponentPropsWithRef<"div">
    & {};

export function FormMessage({style, children, ...more}: FormMessageProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "auto",
                flex: 1,
                fontSize: "0.75em",
                fontWeight: "normal",
                fontFamily: Font[1],
                color: Color[0],
                ...style
            }}
            {...more}>
            {children}
        </div>
    </>;
}