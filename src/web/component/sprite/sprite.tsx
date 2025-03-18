import {
    type ComponentPropsWithRef,
    type ReactNode
} from "@web";

export type SpriteProps =
    & ComponentPropsWithRef<"div">
    & {
    url: string
};

export function Sprite({url, style, children, ...more}: SpriteProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${url})`,
                backgroundSize: "contain",
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                backgroundRepeat: "no-repeat",
                ...style
            }}
            {...more}>
            {children}
        </div>
    </>;
}