import * as Web from "@web";

export type NavbarButtonProps =
    & Web.React.ComponentPropsWithRef<"button">
    & {
    icon?: string;
    iconStyle?: Web.React.CSSProperties;
    contentStyle?: Web.React.CSSProperties;
};

export function NavbarButton({
    icon,
    iconStyle,
    contentStyle,
    style,
    children,
    ...more
}: NavbarButtonProps): Web.React.ReactNode {
    return <>
        <button
            style={{
                all: "unset",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                padding: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#F1E4E4",
                gap: 5,
                ...style
            }}
            {...more}>
            {icon ?
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundImage: `url(${icon})`,
                        backgroundPositionX: "center",
                        backgroundPositionY: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        width: 15,
                        aspectRatio: 1 / 1,
                        ...iconStyle
                    }}/> : undefined}
            {children ? <div
                style={{
                    fontSize: "0.75em",
                    fontWeight: "normal",
                    fontFamily: Web.Theme.FONT_1,
                    color: Web.Theme.DARK_COLOR,
                    ...contentStyle
                }}>
                {children}
            </div> : undefined}
        </button>
    </>;
}