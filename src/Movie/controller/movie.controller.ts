import { Body, Controller, Get, Post } from "@nestjs/common";
import { MovieService } from "../service/movie.service";
import { CreateMovieDto } from "../dtos/create-movie.dto";

@Controller('movie')
export class MovieController{
constructor(private readonly movieService: MovieService){}

    @Post()
    async PostMovieOnCatalog(@Body() createMovie: CreateMovieDto){
        //get from api movie and post on databse (catalog)
        const result = await this.movieService.getMovie(createMovie.title);
        return result;
    }

    @Get()
    async ShowAll(){
        return await this.movieService.showAll();
    }

    
    

}