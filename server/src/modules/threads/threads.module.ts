import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thread } from './entities/thread.entity';
import { ThreadsRepository } from './repositories/threads.repository';
import { ThreadsService } from './threads.service';
import { ThreadsController } from './threads.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Thread])],
    providers: [ThreadsRepository, ThreadsService],
    controllers: [ThreadsController],
})
export class ThreadsModule {}
