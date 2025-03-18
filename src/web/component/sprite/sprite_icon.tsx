import {
    type ReactNode,
    type SpriteProps,
    Sprite
} from "@web";

export type SpriteIconProps =
    & SpriteProps
    & {};

export function SpriteIcon({style, children, ...more}: SpriteIconProps): ReactNode {
    return <>
        <Sprite
            style={{
                aspectRatio: "1 / 1",
                ...style
            }}
            {...more}>
            {children}
        </Sprite>
    </>;
}