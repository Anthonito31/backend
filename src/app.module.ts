import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'dal2.hostclusters.com',
      port: 3306,
      username: 'donaconamor_donaconamor',
      password: 'G3gmXApZslZC',
      database: 'donaconamor_blog',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
