import { Application,Router } from "https://deno.land/x/oak@v11.1.0/mod.ts"


const app = new Application();

const router = new Router();


const getCharacters =async(page)=>{
  const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`,
  );
  const json= await data.json()
  return json;
}


router.get("/hora",(ctx)=>{
  ctx.response.body = new Date().getTime().toString();
})
.get("/characters/:page",async (ctx)=>{//Es asíncrona porque esto es pedirle datos a la api de rick y morty
  let page = Number(ctx.params?.page);

  if(page>42){
    ctx.response.body ="Invalid Page Number";
    ctx.response.status=500;
    return;
  }if(page<1){
    page=1;
    const jsonresponse=await getCharacters(page);
    ctx.response.body=jsonresponse;
    ctx.response.status=200;
    ctx.response.type= "application/json";
  }else{
    const jsonresponse=await getCharacters(page);
    ctx.response.body=jsonresponse;
    ctx.response.status=200;
    ctx.response.type= "application/json";
  }
  
})
.get("/characters",async (ctx)=>{//Es asíncrona porque esto es pedirle datos a la api de rick y morty
  
  const jsonresponse=await fetch("https://rickandmortyapi.com/api/character/?page=1");
  const jsonData=await jsonresponse.json();
  ctx.response.body=jsonData;
  ctx.response.type= "application/json";
})
.get("/dia/:id",(ctx)=>{
  if(Number(ctx?.params?.id)>7){
    ctx.response.body ="Invalid Day";
    ctx.response.status=500;
  }else{
    ctx.response.body= {
      dia:new Date().getDay().toString(),
      n:Number(ctx?.params.id),
  };
  }
});

app.use(router.routes())

await app.listen({ port: 8000 });
