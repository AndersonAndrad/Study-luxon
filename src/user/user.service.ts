import { IUser } from './user.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async showAllUsers() {
    return await this.userRepository.find();
  }

  async onlyUser(id: string) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async createUser(data: IUser) {
    return await this.userRepository.save(this.userRepository.create(data));
  }

  async updateUser(id: any, data: IUser) {
    await this.userRepository.update({ id }, data);
    return this.userRepository.findOne({ where: { id } });
  }

  async deleteUser(id: any) {
    await this.userRepository.delete({ id });
    return { deleted: true };
  }
}
