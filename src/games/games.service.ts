import { GameEntity } from './games.entity';
import { IGame } from './games.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(GameEntity)
    private gameRepository: Repository<GameEntity>,
  ) {}

  async showAllGAmes() {
    return await this.gameRepository.find();
  }

  async onlyGame(id: number) {
    return await this.gameRepository.findOne({ where: { id } });
  }

  async createGame(data: IGame) {
    return await this.gameRepository.save(this.gameRepository.create(data));
  }

  async updateGame(id: number, data: IGame) {
    await this.gameRepository.update({ id }, data);
    return this.gameRepository.findOne({ where: { id } });
  }

  async deleteGame(id: number) {
    await this.gameRepository.delete({ id });
    return { deleted: true };
  }
}
