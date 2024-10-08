import { Module } from '@nestjs/common';
import { MovieModule } from './Movie/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './Movie/entity/movie.entity';
import { ProfessioanlModule } from './Profissionals/professional.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Movie]),
    MovieModule,
    ProfessioanlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
