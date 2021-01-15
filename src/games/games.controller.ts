import { IGame } from './games.interface';
import { GamesService } from './games.service';
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Param } from '@nestjs/common';

@Controller('games')
export class GamesController {
  constructor(private GamesService: GamesService) {}

  @Get()
  showAllGames() {
    return this.GamesService.showAllGAmes();
  }

  @Get(':id')
  onlyGame(@Param('id') id: number) {
    return this.GamesService.onlyGame(id);
  }

  @Post()
  createGame(@Body() data: IGame) {
    return this.GamesService.createGame(data);
  }

  @Put(':id')
  updateGame(@Param('id') id: number, @Body() data: IGame) {
    return this.GamesService.updateGame(id, data);
  }

  @Delete(':id')
  deleteGame(@Param('id') id: number) {
    return this.GamesService.deleteGame(id);
  }
}
