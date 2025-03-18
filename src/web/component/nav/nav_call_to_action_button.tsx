import {
    type ComponentPropsWithRef,
    type ReactNode,
    NavCallToActionButtonIcon
} from "@web";

export type NavCallToActionButtonProps =
    & ComponentPropsWithRef<"div">
    & {
    to: string;
};

export function NavCallToActionButton({to, style, children, ...more}: NavCallToActionButtonProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                position: "relative",
                ...style
            }}>
            <NavCallToActionButtonIcon
                style={{
                    position: "absolute",
                    right: "100%",
                    bottom: "100%"
                }}/>
            
        </div>
    </>;
}