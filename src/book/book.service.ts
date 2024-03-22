import { PrismaService } from '../prisma.service';
import { Book } from './book.model';
import { Injectable } from '@nestjs/common';


@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {
  }

  async getAllBooks(): Promise<Book[]> {
    return this.prisma.books.findMany();
  }

  async getBook(id: number): Promise<Book | null> {
    const request = this.prisma.books.findUnique({ where: { id: Number(id) } });
    if (!request){
      return null;
    }
    return request;
  }

  async createBook(data: Book): Promise<Book> {
    return this.prisma.books.create({
      data,
    });
  }

  async updateBook(id:number, data:Book):Promise<Book>{
    return this.prisma.books.update({
      where: {id: Number(id)},
      data:{title: data.title, description: data.description}
    })
  }

  async deleteBook(id:number): Promise<Book>{
    return this.prisma.books.delete({
      where: {id: Number(id)},
    })
  }

}