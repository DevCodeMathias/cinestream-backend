import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movie } from "../entity/movie.entity";
import { Repository } from "typeorm";


@Injectable()
export class movieRepository{
    constructor(
        @InjectRepository(Movie)
        private readonly repository: Repository<Movie>
    ){}


    async createMovie(movie:Movie): Promise<Movie>{
        const newMovie = this.repository.create(movie);
        return await this.repository.save(newMovie);
    }
}