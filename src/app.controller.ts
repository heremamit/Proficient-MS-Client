import { Controller, Get, Post, Body } from '@nestjs/common';
import { ConnectionService } from './connection.service';

@Controller()
export class AppController {
  constructor(private readonly connectionService: ConnectionService) {}

  @Post('test')
  squareOfTheNumber(@Body('data') data) {
    return this.connectionService.squareOfTheNumber('add', data);
  }
}
