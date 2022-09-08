import {User} from "../user";
import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class JoinUserDto implements User{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    username: string;
}