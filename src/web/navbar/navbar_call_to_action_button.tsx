import * as Web from "@web";

export type NavbarCallToActionButtonProps = 
    & Web.React.ComponentPropsWithRef<"div">
    & {
    to: string;
};

export function NavbarCallToActionButton({to, style, children, ...more}: NavbarCallToActionButtonProps): Web.React.ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                position: "relative",
                ...style
            }}
            {...more}>
            <Web.NavbarCallToActionButtonStar
                style={{
                    position: "absolute",
                    right: "100%",
                    bottom: "100%"
                }}/>
            <Web.ReactRouterDOM.Link
                to={to}>
                <Web.NavbarButton
                    style={{
                        background: Web.Theme.DARK_COLOR
                    }}
                    childStyle={{
                        color: Web.Theme.LIGHT_COLOR
                    }}>
                    {children}
                </Web.NavbarButton>
            </Web.ReactRouterDOM.Link>
        </div>
    </>;
}