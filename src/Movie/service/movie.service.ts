import { HttpService } from "@nestjs/axios";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { plainToInstance } from 'class-transformer';
import { firstValueFrom } from "rxjs";

import * as dotenv from 'dotenv';
dotenv.config();

import { InjectRepository } from "@nestjs/typeorm";
import { CreateMovieDto } from "../dtos/create-movie.dto";
import { Repository } from "typeorm";

import { Movie } from "../entity/movie.entity";

@Injectable()
export class MovieService {

    private readonly omdbApiUrl = 'http://www.omdbapi.com/';
    private readonly apiKey = process.env.OMDB_API_KEY;
    
    constructor(
        @InjectRepository(Movie)
        private Repositoy:Repository<Movie> , 
        private readonly httpService: HttpService,
    ) {}

    async getMovie(title: CreateMovieDto ): Promise<Movie>{
        try {
            const { data } = await firstValueFrom(
                this.httpService.get(`${this.omdbApiUrl}?t=${title}&apikey=${this.apiKey}`)
            );

            if (!data || data.Response === 'False') {
                throw new InternalServerErrorException('Movie not found');
            }

            
            const movie = plainToInstance(Movie, {
                title: data.Title,
                year: data.Year,
                released: data.Released,
                runtime: data.Runtime,
                genre: data.Genre,
                director: data.Director,
                writer: data.Writer,
                actors: data.Actors,
                plot: data.Plot,
                language: data.Language,
                country: data.Country,
            });

            //console.log(movie)

            const dataMovie = await this.Repositoy.create(movie)
            
            await this.Repositoy.save(dataMovie)

            return movie

        } catch (error) {
            
            console.log(error)
            throw new InternalServerErrorException('Error fetching movie data');
            
        }
    }
}
