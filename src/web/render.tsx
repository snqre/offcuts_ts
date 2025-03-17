import * as Web from "src/web/mod";

export function render(app: Web.React.ReactNode): void {
    let element: HTMLElement | null = document.getElementById("root");
    if (element === null) {
        throw "APP.ERR_MISSING_ROOT_ELEMENT";
    }
    Web.ReactDOMClient
        .createRoot(element)
        .render(app);
}