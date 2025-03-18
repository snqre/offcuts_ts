import * as Web from "@web";

export type HomeRouteSection = {
    heading: string;
    content: Array<string>;
};

export type HomeRouteProps = 
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
    imageCarouselUrls: Array<string>;
    heading: string;
    middleSectionSubHeadings: Array<string>;
    sections: Array<HomeRouteSection>;
};

export function HomeRoute({
    materials,
    materialFocus,
    products,
    productFocus,
    user,
    userIsSignedIn,
    onSignUp,
    onSignIn,
    imageCarouselUrls,
    heading,
    middleSectionSubHeadings,
    sections,
    ...more
}: HomeRouteProps): Web.React.ReactNode {
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
                    urls={imageCarouselUrls}>
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
                        {heading}
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
                    {middleSectionSubHeadings.map(subHeading => <>
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
                {sections.map(card => <>
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
                            {card.heading}
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "start",
                                alignItems: "start",
                                width: "100%",
                            }}>
                            {card.content.map(content => <>
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
                                    {content}
                                </div>
                            </>)}
                        </div>
                    </div>
                </>)}
            </div>
        </Web.Page>
    </>;
}