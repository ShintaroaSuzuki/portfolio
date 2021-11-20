import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CustomTextInput {
  @Field(() => String)
  text: string;

  @Field(() => Boolean, { nullable: true })
  bold?: boolean;

  @Field(() => Boolean, { nullable: true })
  code?: boolean;

  @Field(() => Boolean, { nullable: true })
  italic?: boolean;
}

@InputType()
export class CustomElementInput {
  @Field(() => String)
  type: 'paragraph' | 'block-quote';

  @Field(() => [CustomTextInput])
  children: CustomTextInput[];
}

@InputType()
export class CreatePostInput {
  @Field(() => String, { description: 'title of post' })
  title: string;

  @Field(() => String, { description: 'body of post' })
  body: string;
}
