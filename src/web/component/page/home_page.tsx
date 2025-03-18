import {
    type ReactNode,
    type PageWith3VerticalSectionsProps,
    PageWith3VerticalSections,
    ImageCarousel
} from "@web";

export type HomePageProps =
    & Omit<PageWith3VerticalSectionsProps,
        | "sections">
    & {
    
};

export function HomePage({
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
                    urls={[]}
                    msIntervalSleep={30 * 1000}
                    animation={{
                        duration: 30 * 1000
                    }}>
                    
                </ImageCarousel>
            </>, <>
            
            </>, <>
            
            </>]}
            {...more}/>
    </>;
}