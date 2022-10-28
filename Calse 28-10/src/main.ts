import { Application, Router } from "oak";


const router = new Router();

router.get("/test", (context)=>{
  context.response.body="Todo ok";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 7777 });