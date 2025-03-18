import {
    ReactNode,
    ComponentPropsWithRef
} from "@web";

export type PageProps = 
    & ComponentPropsWithRef<"div">
    & {
    navbar?: ReactNode;
    footer?: ReactNode;
};

export function Page({
    navbar,
    footer,
    style,
    children,
    ...more
}: PageProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
                background: "white",
                ...style
            }}
            {...more}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                    minWidth: 1024,
                    maxWidth: 1440,
                    width: "100%",
                    height: "100%",
                    flex: 1,
                    paddingLeft: 64,
                    paddingRight: 64
                }}>
                {navbar}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flexGrow: 1,
                        width: "100%",
                        height: "100%"
                    }}>
                    {children}
                </div>
                {footer}
            </div>
        </div>     
    </>;
}