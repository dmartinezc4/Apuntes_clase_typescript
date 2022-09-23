//Ejercicio 1.ts

//Partiendo de 1 array, hacer otro con solo los impares y sin repetirse

const array:number[]=[ 2,3,4,2,4,3,32,3,3,5,3,3,3,2,212,2,3];; //Deberían salir el 3 y el 5


const arrayodd:number[]=array.filter(n=> n%2!==0 );

console.log(arrayodd);



const finalarray:number[]=arrayodd.reduce((acc:number[],cur:number)=>{
    if(!acc.includes(cur)){
        acc.push(cur);
    }
    return acc;
},[])

console.log(finalarray);
