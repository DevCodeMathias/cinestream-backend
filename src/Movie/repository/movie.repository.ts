import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movie } from "../entity/movie.entity";
import { Repository } from "typeorm";
import { title } from "process";


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

    async GetAll():Promise<Movie[]>{
        return await this.repository.find();
    }

    async IsMovieInDatabase(title:string):Promise<boolean>{
        const Movie = await this.repository.find({
            where:{
                title:title
            }
        })

        return Movie != null
    }

    //verificar isso 
    async DeleteMovie(id:number):Promise<void>{
        await this.repository.delete(id)
    }
}