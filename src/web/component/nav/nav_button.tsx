import {
    ReactNode,
    ComponentPropsWithRef,
    CSSProperties,
    SpringConfig,
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
    animation?: SpringConfig
};

export function NavButton({
    icon,
    iconStyle,
    childStyle,
    animation,
    style,
    children,
    ...more
}: NavButtonProps): ReactNode {
    let initFontSize: string = "0.75em";
    let nextFontSize: string = "0.50em";
    let spring = useSpring(() => ({
        fontSize: initFontSize
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
                            fontSize: nextFontSize,
                            config: animation
                        });
                        return;
                    }}
                    onMouseLeave={() => {
                        spring[1].start({
                            fontSize: initFontSize,
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