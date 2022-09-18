import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(_user: CreateUserDto): Promise<InsertResult> {
    return this.usersRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([_user])
      .execute();
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  findOne(_id: string): Promise<User> {
    return this.usersRepository.findOneOrFail({
      where: {
        id: _id,
      },
    });
  }

  async update(_id: string, _userData: UpdateUserDto): Promise<UpdateResult> {
    return this.usersRepository
      .createQueryBuilder()
      .update(User)
      .set(_userData)
      .where('id = :id', { id: _id })
      .execute();
  }

  remove(_id: string): Promise<DeleteResult> {
    return this.usersRepository
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id: _id })
      .execute();
  }
}
