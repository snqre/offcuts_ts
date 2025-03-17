import * as Web from "@web";
// @ts-ignore
import ICON from "../../web/public/icon/big_star_and_smaller_star.png";

export type NavbarCallToActionButtonStarProps = 
    & Omit<Web.React.ComponentPropsWithRef<"div">, "children">
    & {};

export function NavbarCallToActionButtonStar({style, ...more}: NavbarCallToActionButtonStarProps): Web.React.ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${ICON})`,
                backgroundSize: "contain",
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                backgroundRepeat: "no-repeat",
                width: 25,
                aspectRatio: 1 / 1,
                ...style
            }}
            {...more}/>
    </>;
}