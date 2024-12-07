import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreatePostDetailsDto } from './dto/create-post-details.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  createPost(@Body() newPost: CreatePostDto) {
    return this.postsService.createPost(newPost);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postsService.update(+id, post);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }

  @Post(':id/details')
  createDetails(
    @Param('id', ParseIntPipe) id: number,
    @Body() details: CreatePostDetailsDto
  ){
    return this.postsService.createPostDetails(id, details);
  }

}
