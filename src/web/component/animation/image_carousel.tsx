import {
    SHADOW,
    ComponentPropsWithRef,
    ReactNode,
    State,
    SpringConfig,
    useSprings,
    useState,
    useEffect,
    animated
} from "@web";

export type ImageCarouselProps =
    & ComponentPropsWithRef<"div">
    & {
    urls: Array<string>;
    msIntervalSleep: number;
    configuration: SpringConfig;
};

export function ImageCarousel({
    urls,
    msIntervalSleep,
    configuration,
    style,
    children,
    ...more
}: ImageCarouselProps): ReactNode {
    let key: State<number> = useState(0);
    let springs = useSprings(urls.length, urls.map((_, urlKey) => ({
        transform: `translateX(${100 * (urlKey - key[0])}%)`,
        config: configuration
    })));

    useEffect(() => {
        let timer: Timer = setInterval(() => key[1](last => (last + 1) % urls.length), msIntervalSleep);
        return () => clearInterval(timer);
    }, []);

    return <>
        <div
            style={{
                borderRadius: 10,
                boxShadow: SHADOW,
                position: "relative",
                overflowX: "hidden",
                overflowY: "hidden",
                ...style
            }}
            {...more}>
            {springs.map((spring, springKey) => <>
                <animated.div
                    key={springKey}
                    style={{
                        ...spring,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        flex: 1,
                        backgroundImage: `url(${urls[springKey]})`,
                        backgroundSize: "cover",
                        backgroundPositionX: "center",
                        backgroundPositionY: "center",
                        backgroundRepeat: "no-repeat"
                    }}/>
            </>)}
            <div
                style={{
                    position: "relative",
                    zIndex: "2",
                    width: "100%",
                    height: "100%",
                    flex: 1
                }}>
                {children}
            </div>
        </div>
    </>;
}