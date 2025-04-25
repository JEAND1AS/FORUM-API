import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return '🚀 GET FUNCIONANDO';
  }

  @Put()
  updateRoot(): string {
    return '🚀 PUT FUNCIONANDO';
  }

  @Post()
  createRoot(): string {
    return '🚀 POST FUNCIONANDO';
  }
}
