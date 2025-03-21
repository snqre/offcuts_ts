import {
    type SpringComponentPropsWithRef,
    type ReactNode,
    type SpringConfig,
    useSpring,
    useEffect,
    animated
} from "@web";

export type RevealProps = 
    & SpringComponentPropsWithRef<"div">
    & {
    msDelay?: number,
    animation?: SpringConfig
};

export function Reveal({
    msDelay=0,
    animation={
        duration: 15000
    },
    style,
    children,
    ...more
}: RevealProps): ReactNode {
    let initOpacity: string = "0";
    let nextOpacity: string = "1";
    let spring = useSpring(() => ({
        opacity: initOpacity,
        delay: msDelay
    }));

    useEffect(() => {
        spring[1].start({
            opacity: nextOpacity,
            config: animation
        });
        return;
    }, []);

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
            }}
            {...more}>
            {children}
        </animated.div>
    </>;
}