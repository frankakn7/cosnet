import { Injectable } from '@nestjs/common';
import { Comment } from 'src/modules/comments/interfaces/comment.interface';
import { CommentsRepository } from './repositories/comments.repository';

@Injectable()
export class CommentsService {
	
	constructor(
		private readonly commentsRepository: CommentsRepository
	){}

	async findAllComments(): Promise<Comment[]>{
		return this.commentsRepository.find();
	}
}
