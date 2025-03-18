import {
    type State,
    type ReactNode,
    type UserData,
    type OrderData,
    type ProductData,
    type NavbarSignUpFormOnSignUpAction,
    type NavbarSignInFormOnSignInAction,
    BrowserRouter,
    Routes,
    Route,
    HomeRoute,
    BasketRoute,
    useState,
    render,
    post
} from "@web";

// @ts-ignore
import PLACEHOLDER from "./img/placeholder.jpg";

function App(): ReactNode {
    let materials: State<Array<string>> = useState<Array<string>>([]);
    let materialFocus: State<string> = useState<string>("");
    let products: State<Array<ProductData>> = useState<Array<ProductData>>([]);
    let productFocus: State<string> = useState<string>("");
    let user: State<UserData | null> = useState<UserData | null>(null);
    let userIsSignedIn: State<boolean> = useState<boolean>(false);
    let shoppingCartOrders: State<Array<OrderData>> = useState<Array<OrderData>>([]);

    let onSignUp: NavbarSignUpFormOnSignUpAction = async (username: string, password: string, email: string) => {
        let success: boolean = (await post<boolean>("/sign_up", {username, password, email}));
        if (success) return;
        throw "SIGN_UP_FAILURE";
    };

    let onSignIn: NavbarSignInFormOnSignInAction = async (username: string, password: string) => {
        let response: UserData | string = (await post<UserData | string>("/sign_in", {
            username: username,
            password: password
        }));
        if (typeof response === "string") throw response;
        return response;
    };

    return <>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<>
                        <HomeRoute
                            materials={materials}
                            materialFocus={materialFocus}
                            products={products}
                            productFocus={productFocus}
                            user={user}
                            userIsSignedIn={userIsSignedIn}
                            onSignUp={onSignUp}
                            onSignIn={onSignIn}
                            imageCarouselUrls={[
                                PLACEHOLDER,
                                PLACEHOLDER,
                                PLACEHOLDER,
                                PLACEHOLDER
                            ]}
                            heading="OFFCSINDINDUTS"
                            middleSectionSubHeadings={[
                                "Revive.",
                                "Reuse.",
                                "Rebuild."
                            ]}
                            sections={[{
                                heading: "Why Offcuts",
                                content: [
                                    "Sustainable Solutions: Divert construction waste from landfills while supporting eco-friendly practices.",
                                    "Affordable Materials: Access high-quality reclaimed materials at a fraction of the cost.",
                                    "Fast & Easy: List, buy, or request leftover materials with ease."
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
                            }]}/>  
                    </>}/>
            </Routes>
        </BrowserRouter>
    </>;
}

render(<App/>);