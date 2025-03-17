import * as Web from "@web";

export type FormProps = 
    & Web.React.ComponentPropsWithRef<"div">
    & {};

export function Form({style, children, ...more}: FormProps): Web.React.ReactNode {
    return <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            fontSize: "1em",
            fontWeight: "normal",
            fontFamily: Web.Theme.FONT_1,
            color: Web.Theme.DARK_COLOR,
            boxShadow: Web.Theme.SHADOW,
            padding: 20,
            borderRadius: 5,
            gap: 20,
            background: "white",
            ...style
        }}
        {...more}>
        {children}
    </div>;
}