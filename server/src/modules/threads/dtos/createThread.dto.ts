import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateThreadDto {
    @IsNotEmpty()
    @IsString()
    url: string;

    @IsString()
    @MaxLength(500)
    title: string;
}
