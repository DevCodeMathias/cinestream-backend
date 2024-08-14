import { Body, Controller, Get, Post } from "@nestjs/common";
import { MovieService } from "./movie.service";

@Controller('movie')
export class MovieController{
constructor(private readonly movieService: MovieService){}

    @Post()
    async getMovie(@Body('title') title: string): Promise<any> {
      try {
        const result = await this.movieService.getMovie(title)
        return result;
      } catch (error) {
        console.error('Erro ao buscar informações do filme:', error);
        throw error; 
      }
    }
}