import * as Web from "@web";

export type BasketRouteProps = 
    & Web.PageProps
    & {
    materials: Web.State<Array<string>>;
    materialFocus: Web.State<string>;
    products: Web.State<Array<Web.ProductData>>;
    productFocus: Web.State<string>;
    user: Web.State<Web.UserData | null>;
    userIsSignedIn: Web.State<boolean>;
    onSignUp: Web.NavbarSignUpFormOnSignUpAction;
    onSignIn: Web.NavbarSignInFormOnSignInAction;
    orders: Web.State<Array<Web.OrderData>>;
};

export function BasketRoute({
    materials,
    materialFocus,
    products,
    productFocus,
    user,
    userIsSignedIn,
    onSignUp,
    onSignIn,
    orders,
    ...more
}: BasketRouteProps): Web.React.ReactNode {

    let cost = () => orders[0].reduce((sum: number, order) => sum + (order.product.price * order.amount), 0);

    let add = (order: Web.OrderData) => {
        let orders$: Array<Web.OrderData> = orders[0];
        orders$
            .map<[Web.OrderData, "RM" | "DC" | "NO"]>(order$ => {
                if (order$.product.key === order.product.key) {
                    if (order$.amount >= 1) {
                        return [order$, "DC"];
                    }
                    if (order$.amount <= 0) {
                        return [order$, "RM"];
                    }
                }
                return [order$, "NO"];
            })
            .map<Web.OrderData | null>(([order$, op]) => {
                if (op === "RM") {
                    return null;
                }
                if (op === "DC") {
                    order$.amount -= 1;
                    return order$;
                }
                return order$;
            })
            .filter(marked => marked !== null);
        orders[1](orders$);
    };

    let sub = (order: Web.OrderData) => {
        let success: boolean = false;
        let orders$: Array<Web.OrderData> = orders[0];
        orders$.forEach(order$ => {
            if (order$.product.key === order.product.key) {
                order$.amount += 1;
                success = true;
            }
            return;
        });
        if (success === false) {
            orders$.push(order);
        }
        orders[1](orders$);
        return;
    };

    return <>
        <Web.Page
            navbar={<>
                <Web.NavbarPartialBuild
                    materials={materials}
                    materialFocus={materialFocus}
                    products={products}
                    productFocus={productFocus}
                    user={user}
                    userIsSignedIn={userIsSignedIn}
                    onSignUp={onSignUp}
                    onSignIn={onSignIn}/>
            </>}
            {...more}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%"
                }}>
                <Web.Table
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
                            <Web.TableItem
                                style={{
                                    gap: 10
                                }}>
                                <Web.TableSymbolButton
                                    onClick={() => sub(order)}>
                                    -
                                </Web.TableSymbolButton>
                                <Web.TableSymbolButton
                                    onClick={() => add(order)}>
                                    +
                                </Web.TableSymbolButton>
                            </Web.TableItem>
                        </>
                    ])]}/>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    flex: 1
                }}>
                <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                    fontSize: "1em",
                    fontWeight: "normal",
                    fontFamily: Web.Theme.FONT_1,
                    width: "100%",
                    height: "auto",
                    paddingTop: 16,
                    paddingBottom: 16
                }}>
                    Total: £{cost().toPrecision(3)}
                </div>
            </div>
        </Web.Page>
    </>;
}