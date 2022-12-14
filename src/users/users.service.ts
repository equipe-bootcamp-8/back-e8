import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { handleErrorConstraintUnique } from 'src/utils/handle-error';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  private userSelect = {
    id: true,
    name: true,
    email: true,
    isAdmin: true,
    active: true,
    createdAt: true,
    updatedAt: true,
  };

  async checkIdAndReturnUser(id: string): Promise<User> {
    const user: User = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });

    if (!user) {
      throw new NotFoundException(`The ID '${id}' is not valid!`);
    }
    return user;
  }

  async create(dto: CreateUserDto): Promise<User | void> {
    const hashedPassword: string = await bcrypt.hash(dto.password, 8);

    const data: CreateUserDto = {
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
    };

    return this.prisma.user
      .create({ data, select: this.userSelect })
      .catch(handleErrorConstraintUnique);
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({ select: this.userSelect });
  }

  findOne(id: string): Promise<User> {
    return this.checkIdAndReturnUser(id);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User | void> {
    await this.checkIdAndReturnUser(id);

    if (dto.password) {
      const hashedPassword: string = await bcrypt.hash(dto.password, 8);

      dto.password = hashedPassword;
    }

    return this.prisma.user
      .update({ where: { id }, data: dto, select: this.userSelect })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.checkIdAndReturnUser(id);

    return this.prisma.user.delete({
      where: { id },
      select: { name: true, email: true },
    });
  }
}
