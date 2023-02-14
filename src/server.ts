import cfg from "./services/config.service";
import express from "express";
import router from "./routes/router";

const app = express();
// app.use(express.json());
app.use(router);

console.log(cfg.server);

app.listen(3000, () =>
    console.log(`Server listening on port ${cfg.server.listenPort}`),
);