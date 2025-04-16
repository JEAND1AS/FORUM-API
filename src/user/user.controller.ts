import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { Prisma, User, User as UserModel } from '@prisma/client';
import { UserService } from './user.service';
import { put } from 'superagent';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async signupUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    const user = await this.userService.user({ id: Number(id) });
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return user;
  }

  @Put()
  async updateUser(
    @Body() userData: Prisma.UserUpdateInput,
    @Param('id') id: string,
  ): Promise<UserModel>{
    return this.userService.updateUser({
      where: {id: Number(id)},
      data: userData,
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel>{
    return this.userService.deleteUser({ id: Number(id)});
  }
  
}




/* 

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
  return this.userService.user({ id: Number(id) });
  }

 */


  /* 
  @Put()
async updateUser(
  @Body() userData: { id: number; data: Prisma.UserUpdateInput },
): Promise<UserModel> {
  const { id, data } = userData;
  return this.userService.updateUser({
    where: { id },
    data,
  });
  
  */