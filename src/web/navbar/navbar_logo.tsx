import * as Web from "@web";
import LOGO from "./img/logo.png";

export type NavbarLogoProps = 
    & Omit<Web.React.ComponentPropsWithRef<"div">, "children">
    & {};

export function NavbarLogo({ style }: NavbarLogoProps): Web.React.ReactNode {
    return <>
        <Web.ReactRouterDOM.Link
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
                    backgroundImage: `url(${ LOGO })`,
                    backgroundSize: "contain",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    width: 150,
                    aspectRatio: 2 / 1,
                    ...style
                }}/>
        </Web.ReactRouterDOM.Link>
    </>;
}