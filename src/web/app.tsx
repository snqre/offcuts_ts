import {
    type ReactNode,
    BrowserRouter,
    Routes,
    Route,
    render,
    NavButton,
    NavCallToActionButton,
    Nav
} from "@web";

function App(): ReactNode {
    return <>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<>
                        <Nav/>
                    </>}/>
            </Routes>
        </BrowserRouter>
    </>;
}

render(<App/>);