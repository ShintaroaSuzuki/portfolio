import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String, { description: 'title of post' })
  title: string;

  @Field(() => String, { description: 'body of post' })
  body: string;
}
