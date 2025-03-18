import {
    SHADOW,
    ComponentPropsWithRef,
    ReactNode,
    Font,
    Color
} from "@web";

export type FormButtonProps =
    & ComponentPropsWithRef<"button">
    & {};

export function FormButton({style, children, ...more}: FormButtonProps): ReactNode {
    return <>
        <button
            style={{
                all: "unset",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                fontSize: "1em",
                fontWeight: "normal",
                fontFamily: Font[1],
                color: Color[1],
                boxShadow: SHADOW,
                background: Color[0],
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
    </>;
}