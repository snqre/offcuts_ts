import {
    type OrderData,
    StripePaymentProvider,
    RedisStorage,
    Server,
    Bridge,
    Env,
    Shop,
    join
} from "@host";

async function main(): Promise<void> {
    let redisPassword: string = Env.get("REDIS_PASSWORD").expect("A Redis password is required.");
    let redisHost: string = Env.get("REDIS_HOST").expect("A Redis host address is required.");
    let redisPort: string = Env.get("REDIS_PORT").expect("A Redis port address is required.");
    let stripePublicKey: string = Env.get("STRIPE_PUBLIC_KEY").expect("A Stripe public key is required.");
    let stripeSecretKey: string = Env.get("STRIPE_SECRET_KEY").expect("A Stripe secret key is required.");
    let redis: RedisStorage = (await RedisStorage(redisPassword, redisHost, Number(redisPort))).expect("A connection to Redis is required.");
    let shop: Shop = Shop(redis);
    Server()
        .use(Server.static(join(__dirname, "web")))
        .use(Server.json())
        .get("/", async (_, response) => response.sendFile(join(__dirname, "web/app.html")))
        .post("/checkout", async (request, response) => {
            let {orders} = request.body as {
                orders: Array<OrderData>
            };
            if (orders.length === 0) {
                let errcode: Bridge.Error = "Bridge.EmptyOrders";
                response.send(errcode);
                return;
            }
            orders.forEach(order => order.product.price *= 100);
            let baseUrl: string = `http://${request.headers.host}`;
            let paymentProvider: StripePaymentProvider.Result<StripePaymentProvider> = StripePaymentProvider(stripeSecretKey);
            if (paymentProvider.err) {
                let errcode: Bridge.Error = "Bridge.PaymentProviderUnavailable";
                response.send(errcode);
                return;
            }
            let paymentProvider$: StripePaymentProvider = paymentProvider.safeUnwrap();
            let url: StripePaymentProvider.Result<string> = (await paymentProvider$.receive(
                baseUrl,
                orders,
                session => {
                    orders.forEach(async order => {
                        let key: string = order.product.key;
                        (await shop.setStock(key)).unwrap();
                    })
                },
                session => {
                    return;
                }
            ));
            if (url.err) {
                let errcode: Bridge.Error = "Bridge.PaymentProviderSessionUrlUnavailable";
                response.send(errcode);
                return;
            }
            let url$: string = url.safeUnwrap();
            response.send({url: url$});
            return;
        })
        .listen(8080, "0.0.0.0", () => console.log("Running on porn 8080"));
    return;
}

main();