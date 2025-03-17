import * as Common from "@common";

export const UserDataSchema = Common.Zod.object({
    username: Common.Zod.string(),
    hash: Common.Zod.string(),
    orders: Common.Zod.array(Common.OrderDataSchema),
    email: Common.Zod.string().or(Common.Zod.null()),
    phoneNumber: Common.Zod.string().or(Common.Zod.null()),
    address: Common.Zod.string().or(Common.Zod.null())
});