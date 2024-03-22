import { Prisma } from '@prisma/client';


export class Book implements Prisma.BooksCreateInput{
  id: number;
  title: string;
  description: string;
}