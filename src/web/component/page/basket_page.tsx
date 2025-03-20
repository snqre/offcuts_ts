import {
    type ReactNode,
    type PageWith2HorizontalSectionsProps,
    type OrderData,
    type State,
    PageWith2HorizontalSections,
    Table,
    TableItem,
    TableSymbolButton,
    CheckoutButton,
    Typography,
    useState,
    useEffect
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
    let cost: State<number> = useState<number>(0);

    useEffect(() => {
        if (orders[0].length === 0) {
            return;
        }
        let sum: number = 0;
        orders[0].forEach(order => sum += (order.product.price * order.amount));
        cost[1](sum);
        return;
    }, [orders[0]]);
    
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
                <Typography>
                    Total: £{cost[0].toPrecision(3)}
                </Typography>
                <CheckoutButton
                    orders={orders}/>
            </>]}
            {...more}/>
    </>;
}