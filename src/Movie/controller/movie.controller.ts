import { Body, Controller, Get, Post } from "@nestjs/common";
import { MovieService } from "../service/movie.service";
import { CreateMovieDto } from "../dtos/create-movie.dto";

@Controller('movie')
export class MovieController{
constructor(private readonly movieService: MovieService){}

    @Post()
    async getMovie(@Body('title') title: CreateMovieDto){
        const result = await this.movieService.getMovie(title)
        return result;
    }
}