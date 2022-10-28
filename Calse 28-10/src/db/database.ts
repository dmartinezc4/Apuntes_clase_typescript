import {ObjectId,MongoClient} from "mongo";
import {config} from "dotenv";
import { CarSchema } from "./schemas.ts";

const env= config();

if(!env.MONGO_USR || !env.MONGO_PWD){
    throw Error("You need env vars MONGO_USR and MONGO_PWD")
}

const dbName= "Cabify";

const client = new MongoClient();
//Conecting to a Mongo Atlas database


await client.connect(
`mongodb+srv://${env.MONGO_USR}:${env.MONGO_PWD}@nebrija.mjaye9w.mongodb.net/${dbName}?authMechanism=SCRAM-SHA-1`
);
const db = client.database(dbName);

console.info(`Mongo DB ${dbName} connected`);

export const carsCollection = db.collection<CarSchema>("Cars");