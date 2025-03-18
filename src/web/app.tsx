import {
    type ReactNode,
    BrowserRouter,
    Routes,
    Route,
    render,
    NavButton
} from "@web";

function App(): ReactNode {
    return <>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<>
                        <NavButton
                            fontSizeOnMouseEnter="0.9em"
                            fontSizeOnMouseLeave="1em"
                            animation={{
                                tension: 1000,
                                friction: 10,
                                mass: 3,
                            }}>
                            Button
                        </NavButton>
                    </>}/>
            </Routes>
        </BrowserRouter>
    </>;
}

render(<App/>);