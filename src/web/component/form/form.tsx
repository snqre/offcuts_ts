import {
    type ComponentPropsWithRef,
    type ReactNode,
    SHADOW,
    Font,
    Color,
} from "@web";

export type FormProps = 
    & ComponentPropsWithRef<"div">
    & {};

export function Form({style, children, ...more}: FormProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                fontSize: "1em",
                fontWeight: "normal",
                fontFamily: Font[1],
                color: Color[0],
                boxShadow: SHADOW,
                padding: 20,
                borderRadius: 5,
                gap: 20,
                background: "white",
                ...style
            }}
            {...more}>
            {children}
        </div>
    </>;
}