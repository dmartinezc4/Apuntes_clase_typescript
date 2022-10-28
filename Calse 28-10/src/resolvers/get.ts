import { carsCollection } from "../db/database.ts";
import { RouterContext } from "https://deno.land/x/router@v2.0.1";

type carContext = RouterContext<
    "/Car/:id", & {
        id:string;
    } &
    Record<string |number, string | undefined>,
    Record<string ,any>
>;

type askCarContext = RouterContext<
    "/askCar",
    Record<string |number, string | undefined>,
    Record<string ,any>
>;

export const Car = (context:carContext)=>{
    const plate =context.params?.id;
    const car =carsCollection.findOne({plate});

    if(!car){
        context.response.status=404;
        context.response.body={
            message:"Car not found",
        }
        return;
    }
} 

export const askCar = async(context:carContext)=>{
    try{
        const cars =await carsCollection.findOne({free:true}).toArray();
        if(cars.length > 0){
            context.response.body=cars[0].plate;
            await carsCollection.updateOne({plate:cars[0].plate}, {
                $set{
                    free:false,
                },
            });
        }else{
            context.response.status=400;
            context.response.body={
                message:"All cars are busy",
            }
        }
    }catch(e){
        console.error(e);
        context.response.body=500;
    }
}
