import { HttpException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreatePostDetailsDto } from './dto/create-post-details.dto';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { PostDetails } from './entities/post-details.entity';
export declare class PostsService {
    private postRepository;
    private detailsRepository;
    constructor(postRepository: Repository<Post>, detailsRepository: Repository<PostDetails>);
    createPost(post: CreatePostDto): Promise<Post | HttpException>;
    findAll(): Promise<Post[]>;
    findOne(id: number): Promise<Post | HttpException>;
    update(id: number, post: UpdatePostDto): Promise<Post | HttpException>;
    remove(id: number): Promise<HttpException | import("typeorm").DeleteResult>;
    createPostDetails(id: number, post_details: CreatePostDetailsDto): Promise<HttpException>;
}
