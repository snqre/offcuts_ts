import {
    ReactNode,
    BrowserRouter,
    Routes,
    Route,
    render
} from "@web";

function App(): ReactNode {
    return <>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<>
                        Hello World
                    </>}/>
            </Routes>
        </BrowserRouter>
    </>;
}

render(<App/>);