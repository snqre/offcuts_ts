import * as Common from "@common";

export type AppData = {
    users: {
        [username: string]: Common.UserData | undefined;
    };
    products: Array<Common.ProductData>;
};