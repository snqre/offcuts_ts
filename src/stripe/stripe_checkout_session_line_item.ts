import {
    default as Stripe
} from "stripe";
import {
    type OrderData
} from "@host";

export type StripeCheckoutSessionLineItem = Stripe.Checkout.SessionCreateParams.LineItem;

export function StripeCheckoutSessionLineItem(order: Readonly<OrderData>): StripeCheckoutSessionLineItem {
    return {
        "quantity": Number(order.amount),
        "price_data": {
            "currency": "gbp",
            "unit_amount": order.product.price,
            "product_data": {
                "name": order.product.name || "",
                "description": order.product.description,
                "metadata": {
                    "key": order.product.key,
                    "name": order.product.name || "",
                    "description": order.product.description || "",
                    "price": order.product.price,
                    "stock": order.product.stock,
                    "material": order.product.material || "",
                    "imageUrl": order.product.imageUrl || ""
                },
                "images": [
                    order.product.imageUrl || ""
                ]
            }
        }
    };
}