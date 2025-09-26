import { Injectable } from '@nestjs/common';
import { Comment } from 'src/modules/comments/interfaces/comment.interface';

@Injectable()
export class CommentsService {
	private readonly comments: Comment[] = []

	findAll(): Comment[]{
		return this.comments;
	}
}
