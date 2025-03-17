import * as Web from "@web";
import PLACEHOLDER from "./img/placeholder.jpg";

function App(): React.ReactNode {


    // #region Server

    async function isValidProductKey(key: string): Promise<boolean> {
        let products$: Array<Web.ProductData> = (await products());
        let k: number = 0;
        while (k < products$.length) {
            let product: Web.ProductData | null = products$.at(k) || null;
            if (product && product.key === key) {
                return true;
            }
            k += 1;
        }
        return false;
    }

    async function productsFromKey(key: string): Promise<Array<Web.ProductData>> {
        return (await products()).filter(product => product.key === key);
    }

    async function productsFromMaterial(material: string): Promise<Array<Web.ProductData>> {
        return (await products()).filter(product => product.material === material);
    }

    async function products(): Promise<Array<Web.ProductData>> {
        return Web.Zod.object({
            products: Web.Zod.array(Web.ProductDataSchema)
        }).parse((await Web.Axios.get("/products")).data).products;
    }

    async function materials(): Promise<Array<string>> {
        return _materials((await products()));
    }

    async function list(password: string, product: Web.ProductData): Promise<void> {
        return _onlyValidResponse(Web.ResponseSchema.parse((await Web.Axios.post("/list", {password, product}))));
    }

    async function delist(password: string, key: string): Promise<void> {
        return _onlyValidResponse(Web.ResponseSchema.parse((await Web.Axios.post("/delist", {password, key}))));
    }

    function _onlyValidResponse({message, e}: Web.Response): void {
        if (e) {
            throw e;
        }
        if (message && message !== "Ok") {
            throw message;
        }
        return;
    }

    function _materials(products: Array<Web.ProductData>): Array<string> {
        let result: Array<string> = [];
        let k: number = 0;
        while (k < products.length) {
            let product: Web.ProductData | undefined = products.at(k);
            if (product) {
                let material: string = product.material;
                if (result.includes(material) === false) {
                    result.push(material);
                }
            }
            k += 1;
        }
        return result;
    }


    // #region Shopping Cart

    let shoppingCartOrders: Web.State<Array<Web.OrderData>> = Web.React.useState<Array<Web.OrderData>>([]);

    function totalShoppingCartCost(): number {
        let result: number = 0;
        for (let order of shoppingCartOrders[0]) {
            result += (order.product.price * order.amount);
        }
        return result;
    }

    function addProductToShoppingCart(key: string, amount: bigint): void {
        let k: number = 0;
        while (k < shoppingCartOrders[0].length) {
            let order: Web.OrderData | undefined = shoppingCartOrders[0].at(k);
            if (order) {
                if (order.product.key === key) {
                    order.amount += Number(amount);
                    
                }
            }
            else {

            }
        }
        return;
    }

    function removeProductFromShoppingCart(key: string, amount: bigint): void {
        let k: number = 0;
        while (k < shoppingCartOrders[0].length) {
            let order: Web.OrderData | undefined = shoppingCartOrders[0].at(k);
            if (order) {
                if (order.product.key === key) {
                    order.amount -= Number(amount);
                    if (order.amount < 0) {
                        let orders: Array<Web.OrderData> = shoppingCartOrders[0];
                        orders.splice(k, 1);
                        shoppingCartOrders[1](orders);
                    }
                    return;
                }
            }
            k += 1;
        }
        return;
    }

    return <>
        <Web.ReactRouterDOM.BrowserRouter>
            <Web.ReactRouterDOM.Routes>
                <Web.ReactRouterDOM.Route
                    path="/"
                    element={<>
                        <Web.Page
                            navbar={<Web.NavbarPartialBuild/>}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "95%",
                                    flex: 1
                                }}>
                                <Web.ImageCarousel
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        flex: 1,
                                        margin: 10,
                                    }}
                                    urls={[
                                        PLACEHOLDER,
                                        PLACEHOLDER,
                                        PLACEHOLDER,
                                        PLACEHOLDER
                                    ]}>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            fontSize: "9em",
                                            fontWeight: "normal",
                                            fontFamily: Web.Theme.FONT_0,
                                            color: Web.Theme.DARK_COLOR
                                        }}>
                                        OFFCUTS
                                    </div>
                                </Web.ImageCarousel>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        paddingTop: 16,
                                        paddingBottom: 32
                                    }}>
                                    {["Revive.", "Reuse.", "Rebuild."].map(subHeading => <>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                fontSize: "3em",
                                                fontWeight: "normal",
                                                fontFamily: Web.Theme.FONT_1,
                                                color: Web.Theme.ACCENT_COLOR,
                                                paddingLeft: 36,
                                                paddingRight: 36
                                            }}>
                                            {subHeading}
                                        </div>
                                    </>)}
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "start",
                                    width: "100%",
                                    height: "auto",
                                    flex: 1
                                }}>
                                {[{
                                    heading: "Why Offcuts",
                                    content: [
                                        "Sustainable Solutions: Divert construction waste from landfills while supporting eco-friendly practices.",
                                        "Affordable Materials: Access high-quality reclaimed materials at a fraction of the cost.",
                                        "Fast & Easy: List, buy, or request lefttover materials with ease."
                                    ]
                                }, {
                                    heading: "For Contractors",
                                    content: [
                                        "Turn your surplus into profit with quick pickups and a seamless listing process."
                                    ]
                                }, {
                                    heading: "For Buyers",
                                    content: [
                                        "Find unique, sustainable materials for your next project -- big or small."
                                    ]
                                }].map(card => <>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "start",
                                            alignItems: "center",
                                            width: "100%",
                                            height: "auto",
                                            flex: 1,
                                            padding: 32
                                        }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "start",
                                                alignItems: "center",
                                                width: "100%",
                                                height: "auto",
                                                flex: 1,
                                                color: Web.Theme.ACCENT_COLOR,
                                                fontSize: "2em",
                                                fontWeight: "normal",
                                                fontFamily: Web.Theme.FONT_0
                                            }}>
                                            { card.heading }
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "start",
                                                alignItems: "start",
                                                width: "100%",
                                            }}>
                                            {
                                                card.content.map(content => {
                                                    return <>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "row",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                color: Web.Theme.DARK_COLOR,
                                                                fontSize: "0.60em",
                                                                fontWeight: "lighter",
                                                                fontFamily: Web.Theme.FONT_1,
                                                                paddingTop: 8,
                                                                paddingBottom: 8,
                                                                textAlign: "left"
                                                            }}>
                                                            { content }
                                                        </div>
                                                    </>;
                                                })
                                            }
                                        </div>
                                    </div>
                                </>)}
                            </div>
                        </Web.Page>
                    </>}/>
                <Web.ReactRouterDOM.Route
                    path="/basket"
                    element={<>
                        <Web.Page
                            navbar={<>
                                <Web.Navbar/>
                            </>}>
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
                                    contents={[...shoppingCartOrders[0].map(order => [
                                        order.product.name,
                                        order.product.price,
                                        order.amount, <>
                                            <Web.TableItem
                                                style={{
                                                    gap: 10
                                                }}>
                                                <Web.TableSymbolButton
                                                    onClick={() => removeProductFromShoppingCart(order.product.key, 1n)}>
                                                    -
                                                </Web.TableSymbolButton>
                                                <Web.TableSymbolButton
                                                    onClick={() => addProductToShoppingCart(order.product.key, 1n)}>
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
                                    Total: £{totalShoppingCartCost().toPrecision(3)}
                                </div>
                            </div>
                        </Web.Page>
                    </>}/>
            </Web.ReactRouterDOM.Routes>
        </Web.ReactRouterDOM.BrowserRouter>
    </>;
}

Web.render(<App/>);