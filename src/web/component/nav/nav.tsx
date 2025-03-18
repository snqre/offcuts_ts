import {
    type ComponentPropsWithRef,
    type ReactNode,
    type State,
    type ProductData
} from "@web";

export type NavProps =
    & ComponentPropsWithRef<"div">
    & {
    materials: State<Array<string>>,
    materialFocus: State<string>,
    materialsDropDownButtonToggled: State<boolean>,
    products: State<Array<ProductData>>,
    productFocus: State<ProductData>,
    searchBarToggled: State<boolean>,
    searchBarInput: State<string>,
    
};
