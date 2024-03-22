import { Module } from '@nestjs/common';
import { BookService } from '../src/book/book.service';
import { PrismaService } from '../src/prisma.service';


@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule{}