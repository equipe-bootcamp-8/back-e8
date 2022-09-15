import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async checkIdAndReturnUser(id: string): Promise<User> {
    const user: User = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException(`O ID ${id} não é válido!`);
    }
    return user;
  }

  async create(dto: CreateUserDto): Promise<User | void> {
    const hashedPassword = await bcrypt.hash(dto.password, 8);

    const data: CreateUserDto = {
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
    };

    return this.prisma.user.create({ data });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: string): Promise<User> {
    return this.checkIdAndReturnUser(id);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User | void> {
    await this.checkIdAndReturnUser(id);

    return this.prisma.user.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.checkIdAndReturnUser(id);

    return this.prisma.user.delete({
      where: { id },
      select: { name: true, email: true },
    });
  }
}
