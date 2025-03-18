import {
    type ProductData
} from "@common";

export type OrderData = {
    product: ProductData;
    amount: number;
};