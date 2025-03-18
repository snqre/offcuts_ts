import {
    type ReactNode,
    type SpriteIconProps,
    BIG_STAR_AND_SMALLER_STAR_ICON,
    SpriteIcon
} from "@web";

export type NavCallToActionButtonIconProps =
    & Omit<SpriteIconProps, "children" | "url">
    & {};

export function NavCallToActionButtonIcon({style, ...more}: NavCallToActionButtonIconProps): ReactNode {
    return <>
        <SpriteIcon
            url={BIG_STAR_AND_SMALLER_STAR_ICON}
            style={{
                width: "25px",
                ...style
            }}
            {...more}/>
    </>;
}