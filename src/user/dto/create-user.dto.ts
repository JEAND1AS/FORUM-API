import { IsAlpha, IsEmail, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateUserDto {


    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;



    @IsAlpha()
    @IsNotEmpty()
    password: string;
}