import { Repository } from "typeorm";
import { Comment } from "../entities/comment.entity";
import { DataSource } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CommentsRepository extends Repository<Comment> {
	constructor(private dataSource: DataSource) {
		super(Comment, dataSource.createEntityManager());
	}
}