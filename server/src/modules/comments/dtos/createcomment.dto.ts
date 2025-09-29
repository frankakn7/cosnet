import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCommentDto {
	@IsNotEmpty()
	@IsString()
	thread_id: string;

	parent_id: string;

	@IsNotEmpty()
	@IsString()
	user_id: string;

	@IsNotEmpty()
	@IsString()
	@MinLength(1)
	@MaxLength(5000)
	content: string;
}