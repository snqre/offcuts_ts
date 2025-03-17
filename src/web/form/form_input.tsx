import * as Web from "@web";

export type FormInputProps =
    & Omit<Web.React.ComponentPropsWithRef<"input">, "children">
    & {};

export function FormInput({style, ...more}: FormInputProps): Web.React.ReactNode {
    return <input
        style={{
            all: "unset",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "auto",
            flexGrow: 1,
            ...style          
        }}
        {...more}/>
}