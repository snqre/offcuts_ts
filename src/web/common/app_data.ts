import {
    type UserData,
    type ProductData
} from "@common";

export type AppData = {
    users: {
        [username: string]: UserData | undefined;
    };
    products: Array<ProductData>;
};