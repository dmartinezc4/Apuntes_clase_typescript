

/*
GET - /books -> Devuelve un array de libros de la página 1 con los campos "id" y "titulo"   HECHO
GET - /books/:page -> Devuelve un array de libros de la página correspondiente con los campos "id" y "titulo"
GET - /book/:id -> Devuelve los detalles un libro de id determinado -> devuelve "id", "titulo", array de "autores" con todos sus datos.

*/

type Person={
  "birth_year": number | null,
  "death_year": number | null,
  "name": string
}

type Book =
{
  "id": number,
  "title": string,
  "subjects": string[],
  "authors": Person[],
  "translators": Person[],
  "bookshelves": string[],
  "languages": string[],
  "copyright": boolean | null
  "media_type": string,
  "formats": string,
  "download_count": number
};


import { Application,Router } from "https://deno.land/x/oak@v11.1.0/mod.ts"


const app = new Application();

const router = new Router();



router.get("/hora",(ctx)=>{
    ctx.response.body = new Date().getTime().toString();
  })
.get("/books",async(ctx)=>{
    const jsonResponse= await fetch("https://gutendex.com/books/"); //Haz un fetch y espera
    const jsonData= await jsonResponse.json();

    const books= jsonData.results.map((elem:Book)=>{
        return{
          id:elem.id,
          title:elem.title,
        };
    });
    ctx.response.body = books;
    ctx.response.type= "application/json";
})
.get("/books/:page",async(ctx)=>{
    let page = Number(ctx.params?.page);
    if(page>2160){
        ctx.response.body ="Invalid Page Number";
        ctx.response.status=500;
        return;
      }if(page<1){
        const jsonResponse= await fetch("https://gutendex.com/books/"); //Haz un fetch y espera
        const jsonData= await jsonResponse.json();
        const books= jsonData.results.map((elem:Book)=>{
            return{
              id:elem.id,
              title:elem.title,
            };
        });
        ctx.response.body = books;
        ctx.response.status=200;
        ctx.response.type= "application/json";
      }else{
        const jsonResponse= await fetch(`https://gutendex.com/books/?page=${page}`); //Haz un fetch y espera
        const jsonData= await jsonResponse.json();
        const books= jsonData.results.map((elem:Book)=>{
            return{
              id:elem.id,
              title:elem.title,
            };
        });
        ctx.response.body = books;
        ctx.response.status=200;
        ctx.response.type= "application/json";
      }
})
.get("/book/:id",async(ctx)=>{
    let id = Number(ctx.params?.id);

    if(id>69091 || id<0){
        ctx.response.body="Invalid Page number";
        ctx.response.type= "application/json";
        ctx.response.status=500;
    }
    const jsonResponse= await fetch(`https://gutendex.com/books/?ids=${id}`); //Haz un fetch y espera
    const jsonData= await jsonResponse.json();
  
  const bookid= jsonData.results.map((elem:Book)=>{
    return{
        id:elem.id,
        title:elem.title,
        authors:elem.authors,
    };
  });
    
  ctx.response.body=bookid;
  ctx.response.status=200;
})

app.use(router.routes())

await app.listen({ port: 8888 });
