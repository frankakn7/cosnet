import { Thread } from 'src/modules/threads/entities/thread.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Thread, (thread) => thread.comments, {
        onDelete: 'CASCADE',
        nullable: false,
    })
    @JoinColumn({ name: 'thread_id' })
    thread: Thread;

    @Column({
        nullable: true,
        default: null,
    })
    parent_id: string;

    @Column()
    user_id: string;

    @Column()
    content: string;

    @CreateDateColumn()
    created_at: Date;
}
