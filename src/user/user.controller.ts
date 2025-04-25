import { Controller, Post, Body, Param, Get, Delete, UseGuards, Patch, ParseIntPipe } from '@nestjs/common';
import { Prisma, User, User as UserModel } from '@prisma/client';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('signup')
  async signupUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<Omit<User, 'password'>> {
    const user = await this.userService.user({ id });
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return user;
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateUser(
    @Body() userData: Prisma.UserUpdateInput,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserModel>{
    return this.userService.updateUser({
      where: { id },
      data: userData,
    });
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<UserModel>{
    return this.userService.deleteUser({ id });
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