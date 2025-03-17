import * as Web from "src/web/mod";

export type State<T1> = [T1, Web.React.Dispatch<Web.React.SetStateAction<T1>>];