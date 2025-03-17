import * as Web from "@web";

export type TableRowProps = 
    & Web.React.ComponentPropsWithRef<"div">
    & {};

export function TableRow({style, children, ...more}: TableRowProps): Web.React.ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
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