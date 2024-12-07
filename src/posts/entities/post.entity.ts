import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { PostDetails } from './post-details.entity';

@Entity({name: 'posts'})
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    img: string;

    @Column({unique: true})
    title: string;

    @Column()
    description: string;

    @OneToOne(() => PostDetails)
    @JoinColumn()
    post_details: PostDetails

}
