import { Module } from '@nestjs/common';
import { MovieModule } from './Movie/movie.module';


@Module({
  imports: [MovieModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
