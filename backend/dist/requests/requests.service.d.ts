export declare class RequestsService {
    create(data: {
        guestPhone: string;
        requestText: string;
    }): import(".prisma/client").Prisma.Prisma__RequestsClient<{
        id: number;
        guestPhone: string;
        requestText: string;
        createdAt: Date;
        status: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        guestPhone: string;
        requestText: string;
        createdAt: Date;
        status: string;
    }[]>;
}
