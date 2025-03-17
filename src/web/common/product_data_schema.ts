import * as Common from "@common";

export const ProductDataSchema = Common.Zod.object({
    key: Common.Zod.string(),
    name: Common.Zod.string().or(Common.Zod.null()),
    description: Common.Zod.string().or(Common.Zod.null()),
    price: Common.Zod.number().nonnegative().finite(),
    stock: Common.Zod.number().nonnegative().int().finite(),
    material: Common.Zod.string(),
    imageUrl: Common.Zod.string().or(Common.Zod.null())
});