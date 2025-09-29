import { Injectable } from '@nestjs/common';
import { CommentsRepository } from './repositories/comments.repository';
import { CreateCommentDto } from './dtos/createcomment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
	
	constructor(
		private readonly commentsRepository: CommentsRepository
	){}

	async findAllComments(): Promise<Comment[]>{
		return this.commentsRepository.find();
	}

	async createComment(commentDto: CreateCommentDto){
		const commentEntity = this.commentsRepository.create({
			thread_id: commentDto.thread_id,
			parent_id: commentDto.parent_id,
			user_id: commentDto.parent_id,
			content: commentDto.content
		})

		return this.commentsRepository.save(commentEntity);
	}
}
