import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  private readonly prisma: PrismaClient;

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }

  get prismaClient(): PrismaClient {
    return this.prisma;
  }
}
