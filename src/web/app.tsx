import {
    type ReactNode,
    BrowserRouter,
    Routes,
    Route,
    render,
    NavButton,
    NavCallToActionButton
} from "@web";

function App(): ReactNode {
    return <>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<>
                        <NavCallToActionButton
                            to="/">
                            For Me
                        </NavCallToActionButton>
                    </>}/>
            </Routes>
        </BrowserRouter>
    </>;
}

render(<App/>);