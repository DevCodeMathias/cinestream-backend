import { HttpService } from "@nestjs/axios";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { plainToInstance } from 'class-transformer';
import { firstValueFrom } from "rxjs";
import { CreateMovieDto } from "./dtos/create-movie.dto";

@Injectable()
export class MovieService {
    
    private readonly omdbApiUrl = 'http://www.omdbapi.com/';
    private readonly apiKey = 'd165f65e';

    constructor(private readonly httpService: HttpService) {}

    async getMovie(movie: string): Promise<CreateMovieDto> {
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

            return movieDto;
        } catch (error) {
 
            throw new InternalServerErrorException('Error fetching movie data');
        }
    }
}
