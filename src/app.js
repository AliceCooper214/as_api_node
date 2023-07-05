import Koa from "koa";
import bodyParser from "koa-bodyparser";
import router from "./router";

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log(`Mock server is running on port 3000`);
});
