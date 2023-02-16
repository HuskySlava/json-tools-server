import cfg from "./services/config.service";
import express from "express";
import router from "./routes/router";

// Middlewares
import bodyParser from "body-parser";
import multer from "multer";

const app = express();

// Fixme: middleware settings
app.use(multer().array("file"));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(router);

console.log(cfg.server);

app.listen(3000, () =>
    console.log(`Server listening on port ${cfg.server.listenPort}`),
);