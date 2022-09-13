import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateUserDto): Promise<User | void> {
    return;
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: string): Promise<User> {
    return this.prisma.user.findOne({ where: { id } });
  }

  update(id: string, dto: UpdateUserDto): Promise<User | void> {
    return this.prisma.user.update(id, dto);
  }

  remove(id: string) {
    return this.prisma.user.remove(id);
  }
}
