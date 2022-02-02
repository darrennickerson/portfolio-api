import { PostService } from './post.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostEntity } from 'src/entities/post.entity';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAllPosts(): Promise<PostEntity[]> {
    return this.postService.findPosts();
  }

  @Post()
  async createPost(@Body() postData: any): Promise<any> {
    return this.postService.createPost(postData);
  }
}
