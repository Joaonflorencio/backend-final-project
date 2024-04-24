import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string;  // Use lowercase 'string' para tipos primitivos em TypeScript.
}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps) {
        // Verifica se o ID foi fornecido
        if (!id) {
            throw new Error("Solicitacíon inválida: ID no fornecido.");
        }

        // Tenta encontrar o cliente
        const findCustomer = await prismaClient.custumer.findFirst({
            where: { id: id }
        });

        // Verifica se o cliente existe
        if (!findCustomer) {
            throw new Error("Cliente no existe!");
        }

        // Procede com a exclusão do cliente
        await prismaClient.custumer.delete({
            where: { id: findCustomer.id }
        });

        // Retorna uma mensagem de sucesso
        return { message: "Cliente eliminado exitosamente!" };
    }
}

export { DeleteCustomerService };