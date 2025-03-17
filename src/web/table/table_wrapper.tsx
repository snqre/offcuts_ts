import * as Web from "@web";

export type TableWrapperProps = 
    & Web.React.ComponentPropsWithRef<"div">
    & {};

export function TableWrapper({style, children, ...more}: TableWrapperProps): Web.React.ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                gap: 20,
                overflowX: "hidden",
                overflowY: "scroll",
                ...style
            }}
            {...more}>
            {children}
        </div>
    </>;
}