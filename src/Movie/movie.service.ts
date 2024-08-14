import { HttpService } from "@nestjs/axios";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { plainToInstance } from 'class-transformer';
import { firstValueFrom } from "rxjs";
import { CreateMovieDto } from "./dtos/create-movie.dto";
import * as dotenv from 'dotenv';
dotenv.config();

import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class MovieService {
    [x: string]: any;

    private readonly omdbApiUrl = 'http://www.omdbapi.com/';
    private readonly apiKey = process.env.OMDB_API_KEY;
    constructor(
        private readonly httpService: HttpService,

    ) {}

    async getMovie(movie: string) {
        try {
            const { data } = await firstValueFrom(
                this.httpService.get(`${this.omdbApiUrl}?t=${movie}&apikey=${this.apiKey}`)
            );

            if (!data || data.Response === 'False') {
                throw new InternalServerErrorException('Movie not found');
            }

            const movieDto = plainToInstance(CreateMovieDto, {
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
           
            return movieDto

        } catch (error) {
            
            console.log(error)
            throw new InternalServerErrorException('Error fetching movie data');
            
        }
    }
}
