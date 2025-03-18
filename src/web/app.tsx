import {
    type ReactNode,
    type State,
    type ProductData,
    type UserData,
    BrowserRouter,
    Routes,
    Route,
    render,
    NavButton,
    NavCallToActionButton,
    NavPartialBuild,
    HomePage,
    useState
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
                            imageCarouselUrls={}
                            imageCarouselMsIntervalSleep={}
                            imageCarouselAnimation={}
                            navbar={<>
                                <NavPartialBuild
                                    materials={materials}
                                    materialFocus={materialFocus}
                                    products={products}
                                    productFocus={productFocus}
                                    user={user}
                                    userIsSignedIn={userIsSignedIn}/>
                            </>}/>
                    </>}/>
            </Routes>
        </BrowserRouter>
    </>;
}

render(<App/>);