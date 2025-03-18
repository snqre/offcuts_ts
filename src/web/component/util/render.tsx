import {
    type ReactNode,
    Root
} from "@web";

export function render(app: ReactNode): void {
    let element: HTMLElement | null = document.getElementById("root");
    if (element === null) {
        throw "ERR_MISSING_ROOT_ELEMENT";
    }
    Root(element).render(app);
}