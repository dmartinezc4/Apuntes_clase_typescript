import { carsCollection } from "../db/database.ts";
import { RouterContext } from "https://deno.land/x/router@v2.0.1";

type RemoveCarContext = RouterContext<
    "/removeCar/:id", & {
        id:string;
    } &
    Record<string |number, string | undefined>,
    Record<string ,any>
>;

export const removeCar =async(context:RemoveCarContext)=>{
    try{
        const plate =context.params?.id;
        const car =carsCollection.findOne({plate});
        if(!car){
            context.response.status=404;
            context.response.body={
                message:"Car not found",
            }
            return;
        }
        if(car){
            if(!car.free){
                context.response.status=400;
                context.response.body={
                message:"Car not free",
            }
            return;
            }else{
                await carsCollection.deleteOne({plate});
                context.response.status=200;
            }
        }
    }catch(e){
        console.error(e);
        context.response.status=500;
    }


    
}