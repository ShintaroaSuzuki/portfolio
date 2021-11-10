import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the post' })
  postId: string;

  @Column()
  @Field(() => String, { description: 'title of post' })
  title: string;

  @Column()
  @Field(() => String, { description: 'body of post' })
  body: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', precision: 0 })
  @Field(() => Date, { description: 'created date of post' })
  created: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', precision: 0 })
  @Field(() => Date, { description: 'updated date of post' })
  updated: Date;
}
