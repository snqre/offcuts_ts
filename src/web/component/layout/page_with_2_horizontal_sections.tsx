import {
    type ReactNode,
    type ComponentPropsWithRef,
    type PageProps,
    Page
} from "@web";

export type PageWith2HorizontalSectionsProps =
    & PageProps
    & {
    sections: [
        ReactNode,
        ReactNode
    ]
};

export function PageWith2HorizontalSections({sections, ...more}: PageWith2HorizontalSectionsProps): ReactNode {
    return <>
        <Page
            {...more}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    flex: "1"
                }}>
                <_Section>{sections[0]}</_Section>
                <_Section>{sections[1]}</_Section>
            </div>
        </Page>
    </>;
}


type _SectionProps =
    & ComponentPropsWithRef<"div">
    & {};

function _Section({style, children, ...more}: _SectionProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                flex: "1",
                ...style
            }}
            {...more}>
            {children}
        </div>
    </>;
}