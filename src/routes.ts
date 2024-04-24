import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerControllers";
import {ListCustomersControllers}  from "./controllers/ListCustomersController"
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (resquest: FastifyRequest, reply: FastifyReply) => {

   return {ok : true} }) 

   fastify.post("/customer" , async (resquest: FastifyRequest, reply: FastifyReply) => {

return new CreateCustomerController().handle(resquest, reply)

 }) 
 fastify.get("/customers" , async (resquest: FastifyRequest, reply: FastifyReply) => {

    return new ListCustomersControllers().handle(resquest, reply)
    
     }) 

     fastify.delete("/customer" , async (resquest: FastifyRequest, reply: FastifyReply) => {

        return new DeleteCustomerController().handle(resquest, reply)
        
         }) 
 

}