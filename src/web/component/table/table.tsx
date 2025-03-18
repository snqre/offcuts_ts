import {
    ComponentPropsWithRef,
    ReactNode,
    TableWrapper,
    TableRow,
    TableCaption,
    TableItem,
    TableHeading,
    TableBody
} from "@web";

export type TableProps = 
    & Omit<ComponentPropsWithRef<"div">, "children">
    & {
    caption: ReactNode;
    headings: Array<ReactNode>;
    contents: Array<Array<ReactNode>>;
};

export function Table({caption, headings, contents, style, ...more}: TableProps): ReactNode {
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
            <TableWrapper>
                <TableRow>
                    <TableCaption>
                        {caption}
                    </TableCaption>
                </TableRow>
                <TableRow>
                    {headings.map(heading => <>
                        <TableItem>
                            <TableHeading>
                                {heading}
                            </TableHeading>
                        </TableItem>
                    </>)}
                </TableRow>
                {contents.map(item => <>
                    <TableItem>
                        <TableBody>
                            {item}
                        </TableBody>
                    </TableItem>
                </>)}
            </TableWrapper>
        </div>
    </>;
}