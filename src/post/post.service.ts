import { PostEntity } from './../entities/post.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepo: Repository<PostEntity>,
  ) {}

  findPosts(): Promise<PostEntity[]> {
    return this.postRepo.find();
  }

  createPost(postData): Promise<PostEntity> {
    return this.postRepo.save(postData);
  }
}
