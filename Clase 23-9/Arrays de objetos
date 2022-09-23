
type Persona ={
    nombre:string,
    edad:number
}

const personas: Array<Partial<Persona>>=[
    {nombre:"Alberto"},
    {nombre:"Maria",edad:23},
    {nombre:"Juan"},
    {nombre:"Alberto",edad:23},

]



const prialberto:Partial<Persona> | undefined=personas.find(elem=> elem.nombre === "Alberto" && elem.edad);

if(prialberto){
    console.log(prialberto.edad);
}

//Reduce

const manyalberto=personas.filter(elem => elem.nombre==="Alberto").length;

const manyalberto2=personas.reduce((acc:number,n:Partial<Persona>)=>{
    if(n.nombre==="Alberto") return acc+1;
    else return acc;

},0)
