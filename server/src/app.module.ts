import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './modules/comments/comments.module';
import { CommentsController } from './modules/comments/comments.controller';
import { CommentsService } from './modules/comments/comments.service';

@Module({
  imports: [CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
