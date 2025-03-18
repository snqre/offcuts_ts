import {
    ComponentPropsWithRef,
    ReactNode
} from "@web";

export type TableItemProps = 
    & ComponentPropsWithRef<"div">
    & {};

export function TableItem({style, children, ...more}: TableItemProps): ReactNode {
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