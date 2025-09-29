import { Body, Controller, Get, Post } from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { Thread } from './entities/thread.entity';
import { CreateThreadDto } from './dtos/createThread.dto';

@Controller('threads')
export class ThreadsController {
    constructor(private threadsService: ThreadsService) {}

    @Get()
    async findAll(): Promise<Thread[]> {
        return this.threadsService.findAllThreads();
    }

    @Post()
    async create(@Body() threadDto: CreateThreadDto) {
        return this.threadsService.createThread(threadDto);
    }
}
