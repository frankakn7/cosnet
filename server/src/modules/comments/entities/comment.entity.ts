import { Column, CreateDateColumn, Entity, ForeignKey, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	thread_id: string;

	@Column({
		nullable: true,
		default:null
	})
	parent_id: string;

	@Column()
	user_id: string;

	@Column()
	content: string;

	@CreateDateColumn()
	created_at: Date;

}