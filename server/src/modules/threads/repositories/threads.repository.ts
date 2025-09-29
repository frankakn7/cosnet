import { DataSource, Repository } from 'typeorm';
import { Thread } from '../entities/thread.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ThreadsRepository extends Repository<Thread> {
    constructor(private dataSource: DataSource) {
        super(Thread, dataSource.createEntityManager());
    }
}
