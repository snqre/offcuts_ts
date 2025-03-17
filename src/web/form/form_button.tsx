import * as Web from "@web";

export type FormButtonProps =
    & Web.React.ComponentPropsWithRef<"button">
    & {};

export function FormButton({style, children, ...more}: FormButtonProps): Web.React.ReactNode {
    return <button
        style={{
            all: "unset",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            fontSize: "1em",
            fontWeight: "normal",
            fontFamily: Web.Theme.FONT_1,
            color: Web.Theme.LIGHT_COLOR,
            boxShadow: Web.Theme.SHADOW,
            background: Web.Theme.DARK_COLOR,
            padding: 5,
            borderRadius: 5,
            width: "100%",
            height: "auto",
            flexGrow: 1,
            ...style
        }}
        {...more}>
        {children}
    </button>
}