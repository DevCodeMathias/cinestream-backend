import { Module } from "@nestjs/common";
import { ProfessionalService } from "./service/profissional.service";

@Module({
    imports:[],
    controllers:[],
    providers:[ProfessionalService],
    exports:[]
})
export class ProfessioanlModule{}