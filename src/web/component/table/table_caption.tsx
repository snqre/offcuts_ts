import {
    type ComponentPropsWithRef,
    type ReactNode,
    Font,
    Color
} from "@web";

export type TableCaptionProps =
    & ComponentPropsWithRef<"div">
    & {};

export function TableCaption({style, children, ...more}: TableCaptionProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2em",
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