import {
    Redis,
    Server,
    Env,
    join
} from "@host";

async function main() {
    let redisPassword: string = Env.get("REDIS_PASSWORD").expect("A Redis password is required.");
    let redisHost: string = Env.get("REDIS_HOST").expect("A Redis host address is required.");
    let redisPort: string = Env.get("REDIS_PORT").expect("A Redis port address is required.");
    let stripePublicKey: string = Env.get("STRIPE_PUBLIC_KEY").expect("A Stripe public key is required.");
    let stripeSecretKey: string = Env.get("STRIPE_SECRET_KEY").expect("A Stripe secret key is required.");
    let redis: Redis = (await Redis(redisPassword, redisHost, Number(redisPort))).expect("A connection to Redis is required.");
    Server()
        .use(Server.static(join(__dirname, "web")))
        .use(Server.json())
        .get("/", (_, response) => response.sendFile(join(__dirname, "web/app.html")))
        .listen(8080);
}

main();