import { carsCollection } from "../db/database.ts";
import { RouterContext } from "https://deno.land/x/router@v2.0.1";

type AddCarContext = RouterContext<
    "/addCar",
    Record<string |number, string | undefined>,
    Record<string ,any>
>;

export const addCar = (context:AddCarContext)=>{
    try{
        const body =context.request.body({type:"json"});
        const value = await body.value;

        if(!value.plate || !value.seats){
            context.response.status=400;
            context.response.body={
                message:"You need to provide plates and seats",
            }
            return;
        }

        const found = await carsCollection.findOne({plate:value.plate});
        if(found){
            context.response.status=400;
            context.response.body={
                message:"Car already in DDBB",
            }
            return;
        }

        await carsCollection.insertOne({
            ...value,
            free:true
        });

        context.response.body = {
            ...value,
            free:true,
        }

    }catch(e){
        console.log(e);
        context.response.status = 500;
    }    
}