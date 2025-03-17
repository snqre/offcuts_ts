import * as Web from "@web";

export type TableHeadingProps = 
    & Web.React.ComponentPropsWithRef<"div">
    & {};

export function TableHeading({style, children, ...more}: TableHeadingProps): Web.React.ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                fontSize: "1.25em",
                fontWeight: "normal",
                fontFamily: Web.Theme.FONT_1,
                color: Web.Theme.DARK_COLOR,
                width: "100%",
                height: "auto",
                flexGrow: 1,
                paddingBottom: 10,
                ...style
            }}
            {...more}>
            {children}
        </div>
    </>;
}