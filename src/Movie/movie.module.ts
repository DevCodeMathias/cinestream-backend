import { Module } from "@nestjs/common";

import { HttpModule, HttpService } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieController } from "./controller/movie.controller";
import { MovieService } from "./service/movie.service";
import { Movie } from "./entity/movie.entity";
import { movieRepository } from "./repository/movie.repository";

@Module({
    imports:[HttpModule, TypeOrmModule.forFeature([Movie])],
    controllers:[MovieController],
    providers:[MovieService,movieRepository],
    exports:[MovieService]
    
})
export class MovieModule{}