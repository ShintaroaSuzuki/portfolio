import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
export class CustomText {
  @Field(() => String)
  text: string;

  @Field(() => Boolean, { nullable: true })
  bold?: boolean;

  @Field(() => Boolean, { nullable: true })
  code?: boolean;

  @Field(() => Boolean, { nullable: true })
  italic?: boolean;
}

@ObjectType()
export class CustomElement {
  @Field(() => String, { nullable: true })
  type?: 'paragraph' | 'block-quote';

  @Field(() => [CustomText], { nullable: true })
  children?: CustomText[];
}

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
