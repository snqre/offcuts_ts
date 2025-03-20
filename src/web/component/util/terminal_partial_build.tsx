import {
    type ReactNode,
    type TerminalProps,
    type State,
    Terminal,
    useState
} from "@web";

export type TerminalPartialBuildProps =
    & Omit<TerminalProps,
        | "last"
        | "next"
        >
    & {};

export function TerminalPartialBuild({...more}: TerminalPartialBuildProps): ReactNode {
    let last: State<Array<Array<string>>> = useState<Array<Array<string>>>([]);
    let next: State<string> = useState<string>("");
    
    return <>
        <Terminal
            last={last}
            next={next}
            {...more}/>
    </>;
}