import {
    type PaymentProvider,
    type OrderData,
    type Closure,
    type StripeCheckoutSession,
    Result as Result$,
    Ok,
    Err,
    StripeCheckoutSessionLineItem
} from "@host";
import {
    default as Stripe
} from "stripe";

export type StripePaymentProvider =
    & PaymentProvider<[StripeCheckoutSession], StripePaymentProvider.Error>
    & {};

export function StripePaymentProvider(_secretKey: string): StripePaymentProvider.Result<StripePaymentProvider> {
    let _api: Stripe;

    /***/ {
        try {
            _api = new Stripe(_secretKey);
        }
        catch {
            return Err("StripePaymentProvider.UnableToCreateStripeApi");
        }
        return Ok({receive});
    }

    async function receive(
        baseUrl: string,
        orders: Array<OrderData>,
        onSuccess: Closure<[StripeCheckoutSession], StripePaymentProvider.Result<void>>,
        onFailure: Closure<[StripeCheckoutSession], StripePaymentProvider.Result<void>>
    ): Promise<StripePaymentProvider.Result<string>> {
        let sessionDurationMs: number = 3600;
        let sessionCheckIntervalMs: number = 9000;
        let sessionDomainUrl: string = baseUrl + "/";
        let session: StripeCheckoutSession = (await _api.checkout.sessions.create({
            "payment_method_types": ["card"],
            "line_items": [...orders.map(order => StripeCheckoutSessionLineItem(order)) || []],
            "mode": "payment",
            "success_url": sessionDomainUrl,
            "cancel_url": sessionDomainUrl
        }));
        let sessionUrl: string | null = session.url;
        if (sessionUrl === null) {
            return Err("StripePaymentProvider.MissingSessionUrl");
        }
        let sessionKey: string = session.id;
        let sessionCheckTimer: Timer = setInterval(async () => {
            let sessionUpdate: StripeCheckoutSession = (await _api.checkout.sessions.retrieve(sessionKey));
            let complete: boolean = sessionUpdate.payment_status === "paid" || sessionUpdate.status === "complete";
            let expired: boolean = sessionUpdate.status === "expired";
            if (expired) {
                clearInterval(sessionCheckTimer);
                onFailure(sessionUpdate);
                return;
            }
            if (complete) {
                clearInterval(sessionCheckTimer);
                onSuccess(sessionUpdate);
                return;
            }
        }, sessionCheckIntervalMs);
        setTimeout(async () => {
            clearInterval(sessionCheckTimer);
            let sessionUpdate: StripeCheckoutSession = (await _api.checkout.sessions.retrieve(sessionKey));
            onFailure(sessionUpdate);
            return;
        }, sessionDurationMs);
        return Ok(sessionUrl);
    }
}

export namespace StripePaymentProvider {

    export type Result<T1> = Result$<T1, Error>;

    export type Error =
        | "StripePaymentProvider.UnableToCreateStripeApi"
        | "StripePaymentProvider.MissingSessionUrl";
}