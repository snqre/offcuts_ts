import {
    type SpringComponentPropsWithRef,
    type ReactNode,
    type SpringConfig,
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
    return <>
        {/** @ts-ignore */}
        <animated.div
            style={{
                display: "contents"
            }}
            {...more}>
            {children}
        </animated.div>
    </>;
}