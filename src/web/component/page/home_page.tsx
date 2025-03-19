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

export type HomePageProps =
    & Omit<PageWith3VerticalSectionsProps,
        | "sections">
    & {
    imageCarouselUrls: Array<string>,
    imageCarouselMsIntervalSleep: number,
    imageCarouselAnimation: SpringConfig,
    heading: string,
    subHeadings: Array<string>,

};

export function HomePage({
    imageCarouselUrls,
    imageCarouselMsIntervalSleep,
    imageCarouselAnimation,
    heading,
    subHeadings,
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
                            duration: 15000
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
                        height: "auto"
                    }}>
                    {subHeadings.map(subHeading => <>
                        <Typography>
                            {subHeading}
                        </Typography>
                    </>)}
                </div>
            </>, <>
                
            </>]}
            {...more}/>
    </>;
}