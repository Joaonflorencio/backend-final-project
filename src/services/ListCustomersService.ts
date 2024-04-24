import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma";  // Assume que prismaClient é uma instância de PrismaClient configurada em outro arquivo

class ListCustomersService {
    async execute() {
        const customers = await prismaClient.custumer.findMany();  // Usa 'customer', supondo que seja o nome correto do modelo
        return customers;
    }
}

export default ListCustomersService;