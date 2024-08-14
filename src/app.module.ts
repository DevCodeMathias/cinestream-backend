import { Module } from '@nestjs/common';
import { MovieModule } from './Movie/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: '',
    //   host: '', 
    //   port: 5432,        
    //   username: '', 
    //   password: '',
    //   database: '', 
    //   entities: [__dirname + ''], 
    //   synchronize: true, 
    // }),
    MovieModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
