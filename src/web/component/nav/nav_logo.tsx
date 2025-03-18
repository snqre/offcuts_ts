import {
    type ReactNode,
    type SpriteProps,
    LOGO,
    Sprite,
    Link
} from "@web";

export type NavLogoProps =
    & Omit<SpriteProps, "children" | "url">
    & {};

export function NavLogo({style, ...more}: NavLogoProps): ReactNode {
    return <>
        <Link
            to="/"
            style={{
                display: "contents"
            }}>
            <Sprite
                url={LOGO}
                style={{
                    cursor: "pointer",
                    width: "150px",
                    aspectRatio: "2 / 1",
                    ...style
                }}
                {...more}/>
        </Link>
    </>;
}