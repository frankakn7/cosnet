import { Comment } from 'src/modules/comments/entities/comment.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * Represents a comment thread which is always for a website or given url
 */
@Entity()
export class Thread {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        unique: true,
    })
    url: string;

    @Column()
    title: string;

    @OneToMany(() => Comment, (comment) => comment.thread)
    comments: Comment[];

    @CreateDateColumn()
    created_at: Date;
}
