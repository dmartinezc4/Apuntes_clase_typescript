import {ObjectId} from "mongo";
import {Car} from "../types.ts";

export type CarSchema = Car & {_id: ObjectId};