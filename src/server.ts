import * as express from "express";
import log from "./log";
const port = process.env.PORT || 5000;

const app: express.Application = express();

app.get("/", (req, res) => {
  res.json(JSON.stringify({ ok: 1, better: 2 })).end();
});

app.listen(process.env.PORT || 5000, () => {
  log.info(`server started at http://localhost:${port}`);
});
