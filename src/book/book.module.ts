import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { PrismaService } from '../prisma.service';


@Module({
  imports: [BookModule],
  controllers: [BookController],
  providers: [BookService, PrismaService],
})
export class BookModule{}