import {
    type ComponentPropsWithRef,
    type ReactNode,
    type State,
    SHADOW,
    Link,
    Font,
    Color
} from "@web";

export type NavMaterialsDropDownButtonProps =
    & ComponentPropsWithRef<"div">
    & {
    materials: State<Array<string>>,
    materialFocus: State<string>,
    toggled: State<boolean>
};

export function NavMaterialsDropDownButton({
    materials,
    materialFocus,
    toggled,
    style,
    children,
    ...more
}: NavMaterialsDropDownButtonProps): ReactNode {
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
                    fontFamily: Font[1],
                    color: Color[0],
                    cursor: "pointer"
                }}>
                {children}
            </div>
            {toggled[0] ? <>
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
                        boxShadow: SHADOW
                    }}>
                    {materials[0].map(material => <>
                        <Link
                            to="/show_room"
                            onClick={() => materialFocus[1](material)}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "0.75em",
                                    fontWeight: "normal",
                                    fontFamily: Font[1],
                                    color: Color[0],
                                    cursor: "pointer"
                                }}>
                                {material}
                            </div>
                        </Link>
                    </>)}
                </div>
            </> : undefined}
        </div>
    </>;
}