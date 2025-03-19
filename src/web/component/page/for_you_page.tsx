import {
    type ReactNode,
    type TypographyProps,
    type ComponentPropsWithRef,
    type PageWith2HorizontalSectionsProps,
    PageWith2HorizontalSections,
    ImageCarousel,
    Typography,
    Color
} from "@web";

export type ForYouPageProps =
    & Omit<PageWith2HorizontalSectionsProps,
        | "sections"
        | "children"
        >
    & {
    imageUrls: Array<string>
};

export function ForYouPage({imageUrls, ...more}: ForYouPageProps): ReactNode {
    return <>
        <PageWith2HorizontalSections
            sections={[<>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "start",
                        width: "100%",
                        gap: "10px"
                    }}>
                    <_Heading/>
                    <_Card
                        heading="Choose a Style"
                        content="Select your preferred architectural or design style for a tailored look."/>
                    <_Card
                        heading="Instant Visuals"
                        content="See photorealistic rendering of how materials can be used in your home."/>
                    <_Card
                        heading="Confidence"
                        content="Visualise your project before purchasing... blending creativity with sustainability."/>
                </div>
            </>, <>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%"
                    }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            gap: 20
                        }}>
                        <ImageCarousel
                            style={{
                                width: 200,
                                aspectRatio: 1 / 1
                            }}
                            urls={imageUrls}
                            msIntervalSleep={15000}
                            animation={{
                                duration: 3000
                            }}/>
                        <ImageCarousel
                            style={{
                                width: 200,
                                aspectRatio: 1 / 1
                            }}
                            urls={imageUrls}
                            msIntervalSleep={20000}
                            animation={{
                                duration: 3000
                            }}/>
                        <ImageCarousel
                            style={{
                                width: 200,
                                aspectRatio: 1 / 1
                            }}
                            urls={imageUrls}
                            msIntervalSleep={25000}
                            animation={{
                                duration: 3000
                            }}/>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: 600
                        }}>
                        <ImageCarousel
                            style={{
                                width: 400,
                                height: 600
                            }}
                            urls={imageUrls}
                            msIntervalSleep={30000}
                            animation={{
                                duration: 3000
                            }}/>
                    </div>
                </div>
            </>]}
            {...more}/>
    </>;
}

type _HeadingProps =
    & Omit<TypographyProps,
        | "children"
        >
    & {};

function _Heading({style, ...more}: _HeadingProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "3em",
                gap: "20px",
                ...style
            }}
            {...more}>
            <Typography
                style={{
                    textWrap: "nowrap"
                }}>
                Coming Soon...
            </Typography>
            <Typography
                style={{
                    textWrap: "nowrap",
                    color: Color[2]
                }}>
                For You
            </Typography>
        </div>
    </>;
}


type _CardProps =
    & Omit<ComponentPropsWithRef<"div">,
        | "children"
        >
    & {
    heading: string,
    content: string
};

function _Card({heading, content, style, ...more}: _CardProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "auto",
                ...style
            }}
            {...more}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%",
                    height: "auto"
                }}>
                <Typography
                    style={{
                        color: Color[2],
                        fontSize: "2em"
                    }}>
                    {heading}
                </Typography>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%",
                    height: "auto"
                }}>
                <Typography
                    style={{
                        fontSize: "1em"
                    }}>
                    {content}
                </Typography>
            </div>
        </div>
    </>;
}