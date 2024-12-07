import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'posts_details'})
export class PostDetails{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    content: string

    @Column()
    author: string;
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}