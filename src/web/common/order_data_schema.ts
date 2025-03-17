import * as Common from "@common";

export const OrderDataSchema = Common.Zod.object({
    product: Common.ProductDataSchema,
    amount: Common.Zod.number().nonnegative().int().finite()
});