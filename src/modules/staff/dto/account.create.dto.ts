import { IsNotEmpty, IsNumber, IsString, Matches, MaxLength, Min, MinLength } from "class-validator";

export class AccountCreateDto {
    @IsString()
    @IsNotEmpty({ message: 'login is required' })
    @MinLength(4, { message: 'login must be at least 4 characters long' })
    @MaxLength(20, { message: 'login must not exceed 20 characters' })
    readonly login: string;

    @IsString()
    @IsNotEmpty({ message: 'password is required' })
    @MinLength(8, { message: 'password must be at least 8 characters long' })
    @MaxLength(32, { message: 'password must not exceed 32 characters' })
    @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/, {
        message: 'password too weak. It must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      })
    readonly password: string;

    @IsNumber()
    @IsNotEmpty({message: 'userGroupID is required'})
    @Min(1, {message: "userGroupID must be at least 1 "})
    readonly userGroupID: number;

    @IsNumber()
    @IsNotEmpty({message: 'staffID is required'})
    @Min(1, {message: "staffID must be at least 1 "})
    readonly staffID: number;
}