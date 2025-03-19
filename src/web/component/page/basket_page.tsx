import {
    type ReactNode,
    type PageWith2HorizontalSectionsProps,
    type OrderData,
    type State,
    PageWith2HorizontalSections,
    Table,
    TableItem,
    TableSymbolButton
} from "@web";

export type BasketPageProps =
    & Omit<PageWith2HorizontalSectionsProps,
        | "sections"
        | "children"
        >
    & {
    orders: State<Array<OrderData>>
};

export function BasketPage({orders, ...more}: BasketPageProps): ReactNode {
    return <>
        <PageWith2HorizontalSections
            sections={[<>
                <Table
                    style={{
                        width: 600,
                        height: 800,
                        justifyContent: "start"
                    }}
                    caption="Checkout"
                    headings={[
                        "Product",
                        "Price",
                        "Amount",
                        "Edit"
                    ]}
                    contents={[...orders[0].map(order => [
                        order.product.name,
                        order.product.price,
                        order.amount, <>
                            <TableItem
                                style={{
                                    gap: 10
                                }}>
                                <TableSymbolButton
                                    onClick={() => {

                                    }}>
                                    -
                                </TableSymbolButton>
                                <TableSymbolButton
                                    onClick={() => {
                                        
                                    }}>
                                    +
                                </TableSymbolButton>
                            </TableItem>
                        </>
                    ])]}/>
            </>, <>
            
            </>]}
            {...more}/>
    </>;
} 