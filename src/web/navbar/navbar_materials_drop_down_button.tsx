import * as Web from "@web";

export type NavbarMaterialsDropDownButtonProps = 
    & Web.React.ComponentPropsWithRef<"div">
    & {
    materials: Web.State<Array<string>>;
    materialFocus: Web.State<string>;
    toggled: Web.State<boolean>;
};

export function NavbarMaterialsDropDownButton({materials, materialFocus, toggled, style, children, ...more}: NavbarMaterialsDropDownButtonProps): Web.React.ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                ...style 
            }}
            {...more}>
            <div
                onClick={() => toggled[1](true)}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1em",
                    fontWeight: "normal",
                    fontFamily: Web.Theme.FONT_1,
                    color: Web.Theme.DARK_COLOR,
                    cursor: "pointer"
                }}>
                {children}
            </div>
            {toggled[1] ? <>
                <div
                    onMouseLeave={() => toggled[1](false)}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "center",
                        position: "absolute",
                        top: "120%",
                        gap: 20,
                        padding: 10,
                        boxShadow: Web.Theme.SHADOW
                    }}>
                    {materials[0].map(material => <>
                        <Web.ReactRouterDOM.Link
                            onClick={() => materialFocus[1](material)}
                            to="/show_room">
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "0.75em",
                                    fontWeight: "normal",
                                    fontFamily: Web.Theme.FONT_1,
                                    color: Web.Theme.DARK_COLOR,
                                    cursor: "pointer"
                                }}>
                                {material}
                            </div>
                        </Web.ReactRouterDOM.Link>
                    </>)}
                </div>
            </> : undefined}
        </div>
    </>;
}