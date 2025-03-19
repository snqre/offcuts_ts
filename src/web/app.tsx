import {
    type ReactNode,
    type State,
    type ProductData,
    type UserData,
    BrowserRouter,
    Routes,
    Route,
    NavPartialBuild,
    HomePage,
    useState,
    render
} from "@web";

function App(): ReactNode {
    let materials: State<Array<string>> = useState<Array<string>>([]);
    let materialFocus: State<string> = useState<string>("");
    let products: State<Array<ProductData>> = useState<Array<ProductData>>([]);
    let productFocus: State<ProductData | null> = useState<ProductData | null>(null);
    let user: State<UserData | null> = useState<UserData | null>(null);
    let userIsSignedIn: State<boolean> = useState<boolean>(false);

    return <>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<>
                        <HomePage
                            imageCarouselUrls={[]}
                            imageCarouselMsIntervalSleep={30000}
                            imageCarouselAnimation={{
                                duration: 30000
                            }}
                            heading="OFFCUTS"
                            subHeadings={[
                                "Revive.",
                                "Reuse.",
                                "R."
                            ]}
                            navbar={<>
                                <NavPartialBuild
                                    materials={materials}
                                    materialFocus={materialFocus}
                                    products={products}
                                    productFocus={productFocus}
                                    user={user}
                                    userIsSignedIn={userIsSignedIn}/>
                            </>}
                            footer={<>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                        height: "auto"
                                    }}>
                                    TODO
                                </div>
                            </>}/>
                    </>}/>
            </Routes>
        </BrowserRouter>
    </>;
}

render(<App/>);