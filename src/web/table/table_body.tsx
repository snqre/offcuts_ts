import * as Web from "@web";

export type TableBodyProps = 
    & Web.React.ComponentPropsWithRef<"div">
    & {};

export function TableBody({style, children, ...more}: TableBodyProps): Web.React.ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                fontSize: "1em",
                fontWeight: "normal",
                fontFamily: Web.Theme.FONT_1,
                color: Web.Theme.DARK_COLOR,
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