import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreatePostDetailsDto } from './dto/create-post-details.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    createPost(newPost: CreatePostDto): Promise<import("./entities/post.entity").Post | import("@nestjs/common").HttpException>;
    findAll(): Promise<import("./entities/post.entity").Post[]>;
    findOne(id: string): Promise<import("./entities/post.entity").Post | import("@nestjs/common").HttpException>;
    update(id: string, post: UpdatePostDto): Promise<import("./entities/post.entity").Post | import("@nestjs/common").HttpException>;
    remove(id: string): Promise<import("@nestjs/common").HttpException | import("typeorm").DeleteResult>;
    createDetails(id: number, details: CreatePostDetailsDto): Promise<import("@nestjs/common").HttpException>;
}
