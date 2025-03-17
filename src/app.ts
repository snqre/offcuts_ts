import * as Host from "@host";

Host.Express()
    .use(Host.Express.static(Host.Path.join(__dirname, "web")))
    .use(Host.Express.json())
    .get("/", (__, response) => response.sendFile(Host.Path.join(__dirname, "web/app.html")))
    .listen(8080);