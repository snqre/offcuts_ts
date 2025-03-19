import {
    type SpringComponentPropsWithRef,
    type ReactNode,
    type SpringConfig,
    type State,
    useSpring,
    useEffect,
    animated
} from "@web";

export type RevealToggledProps =
    & SpringComponentPropsWithRef<"div">
    & {
    toggled: State<boolean>,
    msDelay?: number,
    animation?: SpringConfig
};

export function RevealToggled({
    toggled,
    msDelay=0,
    animation={
        duration: 1500
    },
    style,
    children,
    ...more
}: RevealToggledProps): ReactNode {
    let initOpacity: string = "0";
    let nextOpacity: string = "1";
    let spring = useSpring(() => ({
        opacity: initOpacity,
        delay: msDelay
    }));

    useEffect(() => {
        if (toggled[0]) {
            spring[1].start({
                opacity: nextOpacity,
                config: animation
            });
            return;
        }
        spring[1].start({
            opacity: initOpacity,
            config: animation
        })
    }, [toggled[0]]);

    return <>
        {/** @ts-ignore */}
        <animated.div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                ...style,
                ...spring[0]
            }}>
            {children}
        </animated.div>
    </>;
}