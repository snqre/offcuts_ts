import {
    ReactNode,
    ComponentPropsWithRef,
    PageProps,
    Page,
} from "@web";

export type PageWith3VerticalSectionsProps = 
    & PageProps
    & {
    sections: [
        ReactNode,
        ReactNode,
        ReactNode
    ];
};

export function PageWith3VerticalSections({sections, ...more}: PageWith3VerticalSectionsProps) {
    return <>
        <Page 
            {...more}>
            <_Section>{sections[0]}</_Section>
            <_Section>{sections[1]}</_Section>
            <_Section>{sections[2]}</_Section>
        </Page>
    </>;
}


type _SectionProps = 
    & ComponentPropsWithRef<"div">
    & {
    children: ReactNode;
};

function _Section({style, children, ...more}: _SectionProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "auto",
                flex: 1,
                ...style
            }}
            {...more}>
            {children}
        </div>
    </>;
}