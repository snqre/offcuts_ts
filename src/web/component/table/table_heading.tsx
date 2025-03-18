import {
    type ComponentPropsWithRef,
    type ReactNode,
    Font,
    Color
} from "@web";

export type TableHeadingProps = 
    & ComponentPropsWithRef<"div">
    & {};

export function TableHeading({style, children, ...more}: TableHeadingProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                fontSize: "1.25em",
                fontWeight: "normal",
                fontFamily: Font[1],
                color: Color[0],
                width: "100%",
                height: "auto",
                flexGrow: 1,
                paddingBottom: 10,
                ...style
            }}
            {...more}>
            {children}
        </div>
    </>;
}