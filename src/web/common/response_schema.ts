import * as Common from "@common";

export const ResponseSchema = Common.Zod.object({
    message: Common.Zod.string().or(Common.Zod.null()),
    e: Common.Zod.unknown()
});