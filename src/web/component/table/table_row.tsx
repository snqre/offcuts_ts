import {
    ComponentPropsWithRef,
    ReactNode
} from "@web";

export type TableRowProps = 
    & ComponentPropsWithRef<"div">
    & {};

export function TableRow({style, children, ...more}: TableRowProps): ReactNode {
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