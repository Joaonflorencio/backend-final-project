import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
       const {name,email} = request.body as {name:string, email:string};
              
        const custumerService = new CreateCustomerService();
        const custumer = await custumerService.execute({name, email});

        reply.send(custumer);
    }
}

export { CreateCustomerController };