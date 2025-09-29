import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsRepository } from './repositories/comments.repository';
import { Comment } from './entities/comment.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Comment])],
	controllers: [CommentsController],
	providers: [
		CommentsRepository,
		CommentsService
	]
})
export class CommentsModule {}
