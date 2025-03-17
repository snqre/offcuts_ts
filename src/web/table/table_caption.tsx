import * as Web from "@web";

export type TableCaptionProps =
    & Web.React.ComponentPropsWithRef<"div">
    & {};

export function TableCaption({style, children, ...more}: TableCaptionProps): Web.React.ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2em",
                fontWeight: "normal",
                fontFamily: Web.Theme.FONT_1,
                color: Web.Theme.DARK_COLOR,
                ...style
            }}
            {...more}>
            {children}
        </div>
    </>;
}