
//Partiendo de un array que tiene los numeros del 1 al 10 que muestre solo los pares
//Filter, map y reduce
function isEven(n:number){
    if(n%2==0) return true;
    else return false;
}


const array: number[]=[1,2,33,4,45,6,17,8,9,10];

const pares: number[]=array.filter(n=>n%2==0);

console.log(pares);

//Hallar el máximo usando las funciones
//Reduce


//  mi greater será previo si es mas grande que el actual o actual si es lo inverso

const greater:number=array.reduce((previo:number,actual:number)=>(previo > actual) ? previo:actual);

console.log(greater);

//Comprobar si todos los números son mayores de 10
//Todos mayor que 10 = ninguno menor que 10

const greaterthan10= array.every(elem=>elem>10);

const greaterthan10_1= !array.some(elem=>elem<10);

//Array que sea el double
//map

const doublearray=array.map(x=>x*2);

console.log(doublearray);

const doublearray2=array.reduce((acc:number[],elem:number)=>{
    return [...acc,elem*2];                                     //Esto es desplegar separarlo en cada uno de sus elementos
},[]);

console.log(doublearray2);


//Una funcion que devuelva el array dado la vuelta
//Filter, map y reduce

const reversearray=array.reduce((acc:number[],elem:number)=>{
    return [elem,...acc];

},[]);

//Pongo el actual y luego lo echo atrás
