import { HttpService } from "@nestjs/axios";
import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { plainToInstance } from 'class-transformer';
import { firstValueFrom } from "rxjs";

import * as dotenv from 'dotenv';
dotenv.config();

import { InjectRepository } from "@nestjs/typeorm";
import { CreateMovieDto } from "../dtos/create-movie.dto";
import { Repository } from "typeorm";

import { Movie } from "../entity/movie.entity";
import { movieRepository } from "../repository/movie.repository";

@Injectable()
export class MovieService {

    private readonly omdbApiUrl = 'http://www.omdbapi.com/';
    private readonly apiKey = process.env.OMDB_API_KEY;
    
    constructor(
        
        private readonly Repository: movieRepository, 
        private readonly httpService: HttpService,
    ) {}

    async getMovie(title: string ): Promise<Movie>{
        try {
            const { data } = await firstValueFrom(
                this.httpService.get(`${this.omdbApiUrl}?t=${title}&apikey=${this.apiKey}`)
            );

            if (!data || data.Response === 'False') {
                throw new NotFoundException('Movie not found');
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
            return await this.Repository.createMovie(movie);

        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error; 
            }
            throw new InternalServerErrorException('Error fetching movie data');
        }
    }
}
