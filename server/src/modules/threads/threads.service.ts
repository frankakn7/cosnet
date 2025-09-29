import { Injectable } from '@nestjs/common';
import { ThreadsRepository } from './repositories/threads.repository';
import { Thread } from './entities/thread.entity';
import { CreateThreadDto } from './dtos/createThread.dto';

@Injectable()
export class ThreadsService {
    constructor(private readonly threadsRepository: ThreadsRepository) {}

    async findAllThreads(): Promise<Thread[]> {
        return this.threadsRepository.find();
    }

    async createThread(threadDto: CreateThreadDto) {
        const threadEntity = this.threadsRepository.create({
            url: threadDto.url,
            title: threadDto.title,
        });

        return this.threadsRepository.save(threadEntity);
    }
}
