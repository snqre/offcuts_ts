import {
    type ComponentPropsWithRef,
    type ReactNode,
    SHADOW,
    Font,
    Color
} from "@web";

export type TableSymbolButtonProps = 
    & ComponentPropsWithRef<"div">
    & {
    inverse?: boolean;
};

export function TableSymbolButton({inverse, style, children, ...more}: TableSymbolButtonProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                background: inverse ? Color[0] : Color[1],
                color: inverse ? Color[1] : Color[0],
                borderRadius: 5,
                fontSize: "1em",
                fontWeight: "normal",
                fontFamily: Font[1],
                boxShadow: SHADOW,
                cursor: "pointer",
                ...style
            }}
            {...more}>
            {children}
        </div>
    </>;
}