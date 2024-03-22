import { BookService } from './book.service';
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Book } from './book.model';


@Controller('api/v1/book')
export class BookController{
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAllBook(): Promise<Book[]>{
    return this.bookService.getAllBooks()
  }

  @Post()
  async postBook(@Body() postData: Book): Promise<Book>{
    return this.bookService.createBook(postData)
  }

  @Get(':id')
  async getBook(@Param('id') id:number):Promise<Book | null>{
    const request = this.bookService.getBook(id);
    if(!request){
      throw new NotFoundException('book does not exist');
    }
    return
  }

  @Put(':id')
  async updateBook(@Param('id') id:number, @Body() postData: Book): Promise<Book>{
  return this.bookService.updateBook(id, postData)
  }

  @Delete(':id')
  async deleteBook(@Param('id') id:number): Promise<Book>{
    return this.bookService.deleteBook(id)
  }
}