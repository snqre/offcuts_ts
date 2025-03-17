import * as Web from "@web";

export type TableSymbolButtonProps = 
    & Web.React.ComponentPropsWithRef<"div">
    & {
    inverse?: boolean;
};

export function TableSymbolButton({inverse, style, children, ...more}: TableSymbolButtonProps): Web.React.ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                background: inverse ? Web.Theme.DARK_COLOR : Web.Theme.LIGHT_COLOR,
                color: inverse ? Web.Theme.LIGHT_COLOR : Web.Theme.DARK_COLOR,
                borderRadius: 5,
                fontSize: "1em",
                fontWeight: "normal",
                fontFamily: Web.Theme.FONT_1,
                boxShadow: Web.Theme.SHADOW,
                cursor: "pointer",
                ...style
            }}
            {...more}>
            {children}
        </div>
    </>;
}