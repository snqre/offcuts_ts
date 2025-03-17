import * as Web from "@web";

export type TableItemProps = 
    & Web.React.ComponentPropsWithRef<"div">
    & {};

export function TableItem({style, children, ...more}: TableItemProps): Web.React.ReactNode {
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