import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './modules/comments/comments.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
