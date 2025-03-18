import { default as Axios } from "axios";

export async function get<T1=unknown>(url: string): Promise<T1> {
    return (await Axios.get(url)).data;
}

export async function post<T1=unknown, T2=unknown>(url: string, data: T2): Promise<T1> {
    return (await Axios.post(url, data)).data;
}