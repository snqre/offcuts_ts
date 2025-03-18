import {
    Dispatch,
    SetStateAction
} from "@web";

export type State<T1> = [T1, Dispatch<SetStateAction<T1>>];