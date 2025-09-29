import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dtos/createComment.dto';
import { Comment } from './entities/comment.entity';

@Controller('comments')
export class CommentsController {
    constructor(private commentsService: CommentsService) {}

    @Get()
    async findAll(): Promise<Comment[]> {
        return this.commentsService.findAllComments();
    }

    @Post()
    async create(@Body() commentDto: CreateCommentDto) {
        return this.commentsService.createComment(commentDto);
    }
}
