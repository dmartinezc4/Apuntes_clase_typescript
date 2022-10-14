type Info ={
  count: number,
  pages: number,
  next: string | null,
  prev: string |null,
}

enum STATUS{
  ALIVE ="Alive",
  DEAD ="Dead",
  UNKNOWN ="Unknown",
}

type Planet={
  name:string,
  url:string,
}

enum Gender{
  FEMALE='Female', 
  MALE= 'Male',
  GENDERLESS= 'Genderless',
  UNKNOWN= 'unknown',
}



type Character={
  id: number,
  name: string,
  status: STATUS,
  species: string,
  type: string,
  gender: Gender,
  origin: Planet,
  location: Planet,
  image: string,
  episode: string[],
  url: string,
  created: string,
}

type CharacterData={
  info:Info,
  results:Character[],
}





/*
const pagina1 = fetchCharacters(1).then(value=>console.log(value));
console.log("hola");


const p1= fetchCharacters(1);
const p2= fetchCharacters(2);
const p3= fetchCharacters(3);


const val= await Promise.all([p1,p2,p3])
console.log(val);
console.log("hola")
*/

const getCharacters =async(page:number):Promise<any>=>{
  const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`,
  );
  return await data.json()
}


const paginas=[];
for(let i=1;i<42;i++){
  paginas.push(i);
}

const promesasguays= paginas.map((page)=>getCharacters(page));

Promise.all(promesasguays).then((values)=>{
  values.forEach((value)=>console.log(value.results[0].name));
  console.log("hola");
});


