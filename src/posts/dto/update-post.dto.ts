/*import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {}*/
export class UpdatePostDto {
    img?: string
    title?: string
    description?: string
}