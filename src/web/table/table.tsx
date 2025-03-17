import * as Web from "@web";

export type TableProps = 
    & Omit<Web.React.ComponentPropsWithRef<"div">, "children">
    & {
    caption: Web.React.ReactNode;
    headings: Array<Web.React.ReactNode>;
    contents: Array<Array<Web.React.ReactNode>>;
};

export function Table({caption, headings, contents, style, ...more}: TableProps): Web.React.ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                ...style
            }}
            {...more}>
            <Web.TableWrapper>
                <Web.TableRow>
                    <Web.TableCaption>
                        {caption}
                    </Web.TableCaption>
                </Web.TableRow>
                <Web.TableRow> 
                    {headings.map(heading => <>
                        <Web.TableItem>
                            <Web.TableHeading>
                                {heading}
                            </Web.TableHeading>
                        </Web.TableItem>
                    </>)}
                </Web.TableRow>
                {contents.map(content => <>
                    <Web.TableRow>
                        {content.map(item => <>
                            <Web.TableItem>
                                <Web.TableBody>
                                    {item}
                                </Web.TableBody>
                            </Web.TableItem>
                        </>)}
                    </Web.TableRow>
                </>)}
            </Web.TableWrapper>
        </div>
    </>;
}