const obj ={
    name:"Alberto",
    age:22,
    friends:["Luis","Maria","Jose"],
    parents: [
        {key:"padre",value:"Luis"},
        {key:"madre",value:"Lola"}
    ]
}

console.log(JSON.stringify(obj))
/*


*/


const convert2String =(obj:any):string=>{
  if(typeof obj ==="string") return `"${obj}"`;  

  if(["number","boolean"].includes(typeof obj)){
    return obj;
  }
  if(Array.isArray(obj)){
    return obj.reduce((str,elem)=>{
       return str+'{'+elem+'}';
    },"[")+"]";
  }

    const acc=Object.keys(obj).reduce((str,key)=>{
            return `${str}"${key}":${convert2String(obj[key])},`;
    },"{")
    return acc.slice(0,-1) + "}";
}

console.log(convert2String(obj));


console.log(convert2String(obj)===JSON.stringify(obj));
