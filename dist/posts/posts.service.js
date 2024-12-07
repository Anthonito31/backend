"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./entities/post.entity");
const post_details_entity_1 = require("./entities/post-details.entity");
let PostsService = class PostsService {
    constructor(postRepository, detailsRepository) {
        this.postRepository = postRepository;
        this.detailsRepository = detailsRepository;
    }
    async createPost(post) {
        const postFound = await this.postRepository.findOne({
            where: { title: post.title }
        });
        if (postFound) {
            return new common_1.HttpException("Post already exists", common_1.HttpStatus.CONFLICT);
        }
        const newPost = this.postRepository.create(post);
        return this.postRepository.save(newPost);
    }
    findAll() {
        return this.postRepository.find();
    }
    async findOne(id) {
        const postFound = await this.postRepository.findOne({
            where: { id }
        });
        if (!postFound) {
            return new common_1.HttpException("Post not found", common_1.HttpStatus.NOT_FOUND);
        }
        return postFound;
    }
    async update(id, post) {
        const postFound = this.postRepository.findOne({
            where: { id }
        });
        if (!postFound) {
            return new common_1.HttpException("Post not found", common_1.HttpStatus.NOT_FOUND);
        }
        const updatePost = Object.assign(postFound, post);
        return this.postRepository.save(updatePost);
    }
    async remove(id) {
        const result = await this.postRepository.delete({ id });
        if (result.affected === 0) {
            return new common_1.HttpException("Post not found", common_1.HttpStatus.NOT_FOUND);
        }
        return result;
    }
    async createPostDetails(id, post_details) {
        const postFound = await this.postRepository.findOne({
            where: { id }
        });
        if (!postFound) {
            return new common_1.HttpException("Post not found", common_1.HttpStatus.NOT_FOUND);
        }
        const newPostDetails = this.detailsRepository.create(post_details);
        const savedDetails = await this.detailsRepository.save(newPostDetails);
        postFound.post_details = savedDetails;
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(1, (0, typeorm_1.InjectRepository)(post_details_entity_1.PostDetails)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PostsService);
//# sourceMappingURL=posts.service.js.map