import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreatePostDetailsDto } from './dto/create-post-details.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { PostDetails } from './entities/post-details.entity';


@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(PostDetails) private detailsRepository: Repository<PostDetails>,
  ) {}

  async createPost(post: CreatePostDto) {

    const postFound = await this.postRepository.findOne({
      where: {title: post.title}
    })

    if(postFound){
      return new HttpException("Post already exists", HttpStatus.CONFLICT)
    }

    const newPost = this.postRepository.create(post);
    return this.postRepository.save(newPost);
  }

  findAll() {
    return this.postRepository.find();
  }

  async findOne(id: number) {
    
    const postFound = await this.postRepository.findOne({
      where: {id}
    });

    if(!postFound){
      return new HttpException("Post not found", HttpStatus.NOT_FOUND);
    }

    return postFound;
  }

  async update(id: number, post: UpdatePostDto) {

    const postFound = this.postRepository.findOne({
      where:{id}
    }) 

    if(!postFound){
      return new HttpException("Post not found", HttpStatus.NOT_FOUND);
    }

    const updatePost = Object.assign (postFound, post);

    return this.postRepository.save(updatePost);
  }

  async remove(id: number) {
    const result = await this.postRepository.delete({id});

    if(result.affected === 0){
      return new HttpException("Post not found", HttpStatus.NOT_FOUND)
    }

    return result;
  }

  async createPostDetails(id: number, post_details: CreatePostDetailsDto) {
    const postFound = await this.postRepository.findOne({
      where:{id}
    });

    if(!postFound){
      return new HttpException("Post not found", HttpStatus.NOT_FOUND)
    }

    const newPostDetails = this.detailsRepository.create(post_details);
    const savedDetails =  await this.detailsRepository.save(newPostDetails);

    postFound.post_details = savedDetails;

  }
}
