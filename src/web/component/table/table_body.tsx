import {
    type ComponentPropsWithRef,
    type ReactNode,
    Font,
    Color
} from "@web";

export type TableBodyProps = 
    & ComponentPropsWithRef<"div">
    & {};

export function TableBody({style, children, ...more}: TableBodyProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                fontSize: "1em",
                fontWeight: "normal",
                fontFamily: Font[1],
                color: Color[0],
                width: "100%",
                height: "auto",
                flexGrow: 1,
                ...style
            }}
            {...more}>
            {children}
        </div>
    </>;
}