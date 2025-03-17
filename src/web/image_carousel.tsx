import * as Web from "@web";

export type ImageCarouselProps = 
    & Web.React.ComponentPropsWithRef<"div">
    & {
    urls: Array<string>;
};

export function ImageCarousel({ urls, style, children, ...more }: ImageCarouselProps): Web.React.ReactNode {
    let key: Web.State<number> = Web.React.useState<number>(0);
    let springs = Web.ReactSpring.useSprings(urls.length, urls.map((__, urlKey) => ({
        transform: `translateX(${ 100 * (urlKey - key[0])}%)`,
        config: Web.ReactSpring.config.gentle
    })));

    function nextImage(): void {
        key[1](last => (last + 1) % urls.length);
        return;
    }

    Web.React.useEffect(() => {
        let timer: Timer = setInterval(() => nextImage(), 30 * 1000);
        return () => clearInterval(timer);
    }, []);

    return <>
        <div
            style={{
                borderRadius: 10,
                boxShadow: Web.Theme.SHADOW,
                position: "relative",
                overflowX: "hidden",
                overflowY: "hidden",
                ...style
            }}
            { ...more }>
            { springs.map((spring, springKey) => (
                <Web.ReactSpring.animated.div
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
                    }}/>)) }
            <div
                style={{
                    position: "relative",
                    zIndex: "2",
                    width: "100%",
                    height: "100%",
                    flex: 1
                }}>
                { children }
            </div>
        </div>
    </>;
}