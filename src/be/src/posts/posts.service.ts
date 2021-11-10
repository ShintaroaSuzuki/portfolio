import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostInput: CreatePostInput): Promise<Post> {
    const post = this.postRepository.create(createPostInput);
    return await this.postRepository.save(post);
  }

  async findAll(): Promise<Array<Post>> {
    return await this.postRepository.find();
  }

  async findOne(postId: string): Promise<Post> {
    const post = await this.postRepository.findOne(postId);
    if (!post) {
      throw new NotFoundException(`Post #${postId} not found`);
    }
    return post;
  }

  async update(
    postId: string,
    updatePostInput: UpdatePostInput,
  ): Promise<Post> {
    const post = await this.postRepository.preload({
      postId: postId,
      ...updatePostInput,
    });
    if (!post) {
      throw new NotFoundException(`Post #${postId} not found`);
    }
    return this.postRepository.save(post);
  }

  async remove(postId: string): Promise<Post> {
    const post = await this.findOne(postId);
    await this.postRepository.remove(post);
    return {
      postId: postId,
      title: '',
      body: '',
      created: new Date(),
    };
  }
}
