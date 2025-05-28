import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class RequestsService {
  create(data: { guestPhone: string; requestText: string }) {
    return prisma.requests.create({
      data: {
        guestPhone: data.guestPhone,
        requestText: data.requestText,
        status: 'pending',
      },
    });
  }

  findAll() {
    return prisma.requests.findMany({
      where: { status: 'pending' },
      orderBy: { createdAt: 'desc' },
    });
  }
}

