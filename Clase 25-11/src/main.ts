import {gql} from "graphql_tag"
import { Server } from "std/http/server.ts";
import { GraphQLHTTP } from "gql";
import { makeExecutableSchema } from "graphql_tools";

type HumanSchema={
    name:string
    id:string
}
type CarSchema={
    plate:string
    driver:string
}

type Human={
    name:string
    id:string
    car:Car

}
type Car={
    plate:string
    driver:Human
}

const CarsCollection:Array<CarSchema>=[
    {plate:"1234DHL",driver:"1"},
    {plate:"1233DHL",driver:"2"}
]

const HumansCollection:Array<HumanSchema>=[
    {id:"1",name:"Alberto"},
    {id:"2",name:"Maria"}
]

const typeDefs = gql`

type Car{
    plate:String!
    driver:Human!
}

type Human{
    id:String!
    car:Car
    name:String!
}

type Query{
    getCar(plate:String!): Car!
    getHuman(id:String!): Human!
}
`;





const resolvers={
    Car:{
        driver: (parent:CarSchema):HumanSchema|undefined=>{
            return HumansCollection.find(h=> h.id === parent.driver);
        }
    },
    Human:{
        car: (parent:HumanSchema):CarSchema|undefined=>{
            return CarsCollection.find(c=> c.driver === parent.id)
        }
    },
    Query:{
        getCar:(_:unknown, args:{plate:string}): CarSchema| undefined=>{
            return CarsCollection.find(c=> c.plate === args.plate);
        },
        getHuman:(_:unknown, args:{id:string}):HumanSchema|undefined=>{
            return HumansCollection.find(h=> h.id === args.id)
        }
    }
};



const s = new Server({
    handler: async (req) => {
      const { pathname } = new URL(req.url);
  
      return pathname === "/graphql"
        ? await GraphQLHTTP<Request>({
            schema: makeExecutableSchema({ resolvers, typeDefs }),
            graphiql: true,
          })(req)
        : new Response("Not Found", { status: 404 });
    },
    port: 3000,
  });

  s.listenAndServe();

console.log(`Server running on: http://localhost:3000/graphql`);