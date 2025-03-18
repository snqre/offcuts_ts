import {
    type ComponentPropsWithRef,
    type ReactNode,
    LOGO,
    Link
} from "@web";

export type NavLogoProps =
    & Omit<ComponentPropsWithRef<"div">, "children">
    & {};

export function NavLogo({style, ...more}: NavLogoProps): ReactNode {
    return <>
        <Link
            to="/"
            style={{
                display: "contents"
            }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: `url(${LOGO})`,
                    backgroundSize: "contain",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    width: 150,
                    aspectRatio: 2 / 1,
                    ...style
                }}
                {...more}/>
        </Link>
    </>;
}