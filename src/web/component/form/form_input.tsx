import {
    ReactNode,
    ComponentPropsWithRef
} from "@web";

export type FormInputProps =
    & Omit<ComponentPropsWithRef<"input">, "children">
    & {};

export function FormInput({style, ...more}: FormInputProps): ReactNode {
    return <>
        <input
            style={{
                all: "unset",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "auto",
                flex: 1,
                ...style   
            }}
            {...more}/>
    </>;
}