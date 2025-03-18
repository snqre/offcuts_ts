import { type OrderData } from "@common";

export type UserData = {
    username: string;
    hash: string;
    orders: Array<OrderData>;
    email?: string;
    phonenumber?: string;
    address?: string;
};