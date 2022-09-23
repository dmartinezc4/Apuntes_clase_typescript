//Objetos  //Grupos de clave y valor
//Principalmente van a tener datos y no necesariamente funciones

type Coche={
    marca:string,
    matricula: string
}

type Persona={
    name: string,
    edad: number,
    amigos: string[],
    coche: Coche
    nombrepareja ?: string                      //Tipo optativo
    
}

//Puede haber Partial<Objeto>, le pueden faltar cosas, Partial<Persona>
//Puede haber Omit<Objeto,"cualidad">, Omit<Persona,"edad"> una persona sin edad


const alberto:Persona={
    name:"alberto",
    edad:18,
    amigos:["Maria","Juan","Jose"],
    coche:{
        marca:"seat",
        matricula: "1234DHL"
    }
};
