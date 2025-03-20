import {
    type ReactNode,
    type ComponentPropsWithRef,
    type State,
    type OrderData,
    type StripeSocket,
    Stripe,
    Bridge,
    Color,
    require
} from "@web";

let _socket: Promise<StripeSocket | null> = Stripe("pk_test_51QKRBU2K2roHgsZDHs8cgu29fIqzRlvzF1nmV5mPdSHZhe93bgEQ9HqwoDTderzA7DWwDfFDpiJTMfjqHvgjIDQx00bF0qqWUL");

export type CheckoutButtonProps =
    & ComponentPropsWithRef<"div">
    & {
    orders: State<Array<OrderData>>
};

export function CheckoutButton({orders}: CheckoutButtonProps): ReactNode {
    return <>
        <div
            onClick={async () => {
                let socket: StripeSocket | null = (await _socket);
                require(socket !== null, "CHECKOUT_BUTTON.ERR_STRIPE_COULD_NOT_BE_REACHED");
                let {errcode, url} = (await Bridge.touch("/checkout", {
                    orders: orders[0]
                }));
                if (errcode !== null) {
                    console.error(errcode);
                    return;
                }
                window.location.href = url;
                return;
            }}
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                background: Color[0],
                color: Color[1],
                padding: 10,
                borderRadius: 5,
                cursor: "pointer",
                width: "100%",
                height: "auto"
            }}>
            Pay Now
        </div>
    </>;
}