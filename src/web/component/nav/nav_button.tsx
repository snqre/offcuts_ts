import {
    type ReactNode,
    type ComponentPropsWithRef,
    type CSSProperties,
    type SpringConfig,
    Font,
    Color,
    useSpring,
    animated
} from "@web";

export type NavButtonProps =
    & ComponentPropsWithRef<"button">
    & {
    icon?: string,
    iconStyle?: CSSProperties,
    childStyle?: CSSProperties,
    animation?: SpringConfig,
    fontSizeOnMouseEnter?: string,
    fontSizeOnMouseLeave?: string
};

export function NavButton({
    icon,
    iconStyle,
    childStyle,
    animation,
    fontSizeOnMouseEnter="0.6em",
    fontSizeOnMouseLeave="0.7em",
    style,
    children,
    ...more
}: NavButtonProps): ReactNode {
    let spring = useSpring(() => ({
        fontSize: fontSizeOnMouseLeave
    }));
    
    return <>
        <button
            style={{
                all: "unset",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                padding: "8px",
                gap: "5px",
                ...style
            }}
            {...more}>
            {icon ? <>
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
                        width: "15px",
                        aspectRatio: "1 / 1",
                        ...iconStyle
                    }}/>
            </> : undefined}
            {children ? <>
                {/** @ts-ignore */}
                <animated.div
                    onMouseEnter={() => {
                        spring[1].start({
                            fontSize: fontSizeOnMouseEnter,
                            config: animation
                        });
                        return;
                    }}
                    onMouseLeave={() => {
                        spring[1].start({
                            fontSize: fontSizeOnMouseLeave,
                            config: animation
                        });
                        return;
                    }}
                    style={{
                        fontWeight: "normal",
                        fontFamily: Font[1],
                        color: Color[0],
                        ...spring[0],
                        ...childStyle
                    }}>
                    {children}
                </animated.div>
            </> : undefined}
        </button>
    </>;
}