import { ObjectId } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import {User, Match, Team} from "../types.ts";

export type UdserSchema = User & {_id: ObjectId};
export type TeamSchema = Omit<Team,"id" |"gf" |"gc"|"points"|"played"> & {_id: ObjectId};
export type MatchSchema = Omit<Match, "id" |"team1" |"team2" > & {_id: ObjectId,team1:ObjectId,team2:ObjectId};