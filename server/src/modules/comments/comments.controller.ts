import { Controller, Get } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from 'src/modules/comments/interfaces/comment.interface';

@Controller('comments')
export class CommentsController {

	constructor(private commentsService: CommentsService){}

	@Get()
	async findAll(): Promise<Comment[]> {
		return this.commentsService.findAll();
	}
}
