import {
    type ReactNode,
    type PageWith3VerticalSectionsProps,
    type SpringConfig,
    PageWith3VerticalSections,
    ImageCarousel,
    Typography,
    Color,
    Reveal
} from "@web";

export type HomePageCard = {
    heading: string,
    content: Array<string>
};

export type HomePageProps =
    & Omit<PageWith3VerticalSectionsProps,
        | "sections">
    & {
    imageCarouselUrls: Array<string>,
    imageCarouselMsIntervalSleep: number,
    imageCarouselAnimation: SpringConfig,
    heading: string,
    subHeadings: Array<string>,
    cards?: Array<HomePageCard>
};

export function HomePage({
    imageCarouselUrls,
    imageCarouselMsIntervalSleep,
    imageCarouselAnimation,
    heading,
    subHeadings,
    cards=[],
    ...more
}: HomePageProps): ReactNode {
    return <>
        <PageWith3VerticalSections
            sections={[<>
                <ImageCarousel
                    style={{
                        width: "100%",
                        height: "auto",
                        flex: "1",
                        margin: "10px"
                    }}
                    urls={imageCarouselUrls}
                    msIntervalSleep={imageCarouselMsIntervalSleep}
                    animation={imageCarouselAnimation}>
                    <Reveal
                        msDelay={1000}
                        animation={{
                            duration: 1000
                        }}
                        style={{
                            width: "100%"
                        }}>
                        <Typography
                            style={{
                                fontSize: "9em",
                                color: Color[0]
                            }}>
                            {heading}
                        </Typography>
                    </Reveal>
                </ImageCarousel>
            </>, <>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "auto",
                        gap: "10px"
                    }}>
                    {subHeadings.map(subHeading => <>
                        <Typography
                            style={{
                                fontSize: "4em",
                                color: Color[2],
                                paddingLeft: "30px",
                                paddingRight: "30px"
                            }}>
                            {subHeading}
                        </Typography>
                    </>)}
                </div>
            </>, <>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "start",
                        width: "100%",
                        height: "auto",
                        flex: "1"
                    }}>
                    {cards.map(card => <>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "start",
                                alignItems: "center",
                                width: "100%",
                                height: "auto",
                                flex: "1",
                                padding: "30px"
                            }}>
                            <Typography
                                style={{
                                    fontSize: "2em",
                                    color: Color[2],
                                    width: "100%",
                                    justifyContent: "start",
                                    paddingBottom: "20px"
                                }}>
                                {card.heading}
                            </Typography>
                            <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "start",
                                alignItems: "center"
                            }}>
                            {card.content.map(line => <>
                                <Typography
                                    style={{
                                        fontSize: "0.75em",
                                        paddingTop: "5px",
                                        paddingBottom: "5px"
                                    }}>
                                    {line}
                                </Typography>
                            </>)}
                        </div>
                        </div>
                    </>)}
                </div>
            </>]}
            {...more}/>
    </>;
}