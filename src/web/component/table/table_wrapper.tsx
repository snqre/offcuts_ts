import {
    ComponentPropsWithRef,
    ReactNode
} from "@web";

export type TableWrapperProps = 
    & ComponentPropsWithRef<"div">
    & {};

export function TableWrapper({style, children, ...more}: TableWrapperProps): ReactNode {
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