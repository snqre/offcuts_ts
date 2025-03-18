import {
    type ReactNode,
    type ComponentPropsWithRef,
    Font
} from "@web";

export type TypographyProps = 
    & ComponentPropsWithRef<"div">
    & {
    
};
 
export function Typography({
    style,
    children,
    ...more
}: TypographyProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1em",
                fontWeight: "normal",
                fontFamily: Font[1],
                ...style
            }}
            {...more}>
            {children}
        </div>
    </>;
}