import {
    type ReactNode,
    type State,
    type ProductData,
    type UserData,
    PLACEHOLDER,
    BrowserRouter,
    Routes,
    Route,
    NavPartialBuild,
    HomePage,
    ForYouPage,
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
                            imageCarouselUrls={[
                                PLACEHOLDER,
                                PLACEHOLDER,
                                PLACEHOLDER
                            ]}
                            imageCarouselMsIntervalSleep={3000}
                            imageCarouselAnimation={{
                                duration: 30000
                            }}
                            heading="OFFCUTS"
                            subHeadings={[
                                "Revive.",
                                "Reuse.",
                                "Rebuild."
                            ]}
                            cards={[{
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
                            }]}
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
                <Route
                    path="/for_you"
                    element={<>
                        <ForYouPage
                            navbar={<>
                                <NavPartialBuild
                                    materials={materials}
                                    materialFocus={materialFocus}
                                    products={products}
                                    productFocus={productFocus}
                                    user={user}
                                    userIsSignedIn={userIsSignedIn}/>
                            </>}
                            imageUrls={[
                                PLACEHOLDER,
                                PLACEHOLDER,
                                PLACEHOLDER,
                                PLACEHOLDER
                            ]}/>
                    </>}/>
            </Routes>
        </BrowserRouter>
    </>;
}

render(<App/>);