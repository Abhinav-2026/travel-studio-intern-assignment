import { Controller, Post, Body, Get } from '@nestjs/common';
import { RequestsService } from './requests.service';

@Controller('api/requests')
export class RequestsController {
  constructor(private readonly service: RequestsService) {}

  @Post()
  create(@Body() body: { guestPhone: string; requestText: string }) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}

