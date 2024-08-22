import { Module } from "@nestjs/common";
import { ProfessionalService } from "./service/profissional.service";
import { ProfessionalController } from "./controller/professionals.controller";
import { ProfessionalRepository } from "./repository/professional.repositoy";
import { Professional } from "./entitys/professional.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports:[TypeOrmModule.forFeature([Professional])],
    controllers:[ProfessionalController],
    providers:[ProfessionalService,ProfessionalRepository],
    exports:[ProfessionalService]
})
export class ProfessioanlModule{}