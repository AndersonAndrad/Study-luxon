import { IUser } from './user.interface';
import { UserService } from './user.service';

import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get()
  showAllUsers() {
    return this.UserService.showAllUsers();
  }

  @Get(':id')
  onlyUser(@Param('id') id: string) {
    return this.UserService.onlyUser(id);
  }

  @Post()
  createUser(@Body() data: IUser) {
    return this.UserService.createUser(data);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() data: IUser) {
    return this.UserService.updateUser(id, data);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.UserService.deleteUser(id);
  }
}
