import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post } from './entities/post.entity';
import { PostDetails } from './entities/post-details.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Post, PostDetails])
  ], 
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
