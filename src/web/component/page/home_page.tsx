import {
    type ReactNode,
    type PageWith3VerticalSectionsProps,
    PageWith3VerticalSections,
    ImageCarousel,
    Typography,
    Color,
    type SpringConfig
} from "@web";

export type HomePageProps =
    & Omit<PageWith3VerticalSectionsProps,
        | "sections">
    & {
    imageCarouselUrls: Array<string>,
    imageCarouselMsIntervalSleep: number,
    imageCarouselAnimation: SpringConfig
};

export function HomePage({
    imageCarouselUrls,
    imageCarouselMsIntervalSleep,
    imageCarouselAnimation,
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
                    <Typography
                        style={{
                            fontSize: "9em",
                            color: Color[0]
                        }}>
                        OFFCUTS
                    </Typography>
                </ImageCarousel>
            </>, <>
            
            </>, <>
            
            </>]}
            {...more}/>
    </>;
}