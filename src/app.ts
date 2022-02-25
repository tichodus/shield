import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import controllers from "./controller";

const PORT = 3000;

const app = createExpressServer({
  controllers,
});

console.log("server run on localhost:", PORT);
app.listen(PORT);
