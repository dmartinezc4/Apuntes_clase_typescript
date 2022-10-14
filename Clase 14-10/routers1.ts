import { Application,Router } from "https://deno.land/x/oak@v11.1.0/mod.ts"


const app = new Application();

const router = new Router();

router.get("/hora",(ctx)=>{
  ctx.response.body = new Date().getTime().toString();
})
.get("/dia",(ctx)=>{
  ctx.response.body=new Date().getDay().toString()
});

app.use(router.routes())

await app.listen({ port: 8000 });
