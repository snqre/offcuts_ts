import {
    type Dispatch,
    type SetStateAction
} from "@web";

export type State<T1> = [T1, Dispatch<SetStateAction<T1>>];