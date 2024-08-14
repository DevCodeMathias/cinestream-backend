import { Module } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { MovieController } from "./movie.controller";
import { HttpModule, HttpService } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports:[
        HttpModule],
    controllers:[MovieController],
    providers:[MovieService, ],
    exports:[MovieService]
    
})
export class MovieModule{}