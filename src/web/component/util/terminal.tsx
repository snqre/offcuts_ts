import {
    type ReactNode,
    type State,
    type ComponentPropsWithRef,
    type Closure,
    Font
} from "@web";

export type TerminalEvalAction = Closure<[commands: Array<string>], Promise<Array<string>>>;

export type TerminalProps =
    & Omit<ComponentPropsWithRef<"div">,
        | "children"
        >
    & {
    last: State<Array<Array<string>>>,
    next: State<string>,
    onEval: TerminalEvalAction
};

export function Terminal({last, next, onEval, style, ...more}: TerminalProps): ReactNode {
    return <>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                padding: 16,
                width: "100%",
                height: "100%",
                overflowX: "hidden",
                overflowY: "auto",
                ...style
            }}
            {...more}>
            {last[0].map(section => <>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "start",
                        width: "100%",
                        height: "auto"
                    }}>
                    {section.map(line => <>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "start",
                                alignItems: "center",
                                width: "100%",
                                height: "auto",
                                fontSize: "0.75em",
                                fontWeight: "normal",
                                fontFamily: Font[2]
                            }}>
                            {line}
                        </div>
                    </>)}
                </div>
            </>)}
            <input
                style={{
                    all: "unset",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    height: "auto",
                    fontSize: "0.75em",
                    fontWeight: "normal",
                    fontFamily: Font[2]
                }}
                placeholder="Commands"
                type="text"
                value={next[0]}
                onChange={e => next[1](e.target.value)}
                onKeyDown={async e => {
                    if (e.key !== "Enter") {
                        return;
                    }
                    if (next[0].trim() === "") {
                        return;
                    }
                    let input: string = next[0];
                    let commands: Array<string> = input.split("|");
                    next[1]("");
                    last[1](last => [...last, [input]]);
                    try {
                        let response: Array<string> = (await onEval(commands));
                        if (response.length === 0) {
                            last[1](last => [...last, ["Ok"]]);
                            return;
                        }
                        last[1](last => [...last, response]);
                        return;
                    }
                    catch (e) {
                        last[1](last => [...last, [String(e)]]);
                        return;
                    }
                }}/>
        </div>
    </>;
}