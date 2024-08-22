import { Injectable } from "@nestjs/common";
import { Professional } from "../entitys/professional.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProfessionalDTOs } from "../dtos/profissional-create";
import { last } from "rxjs";
import { promises } from "dns";

@Injectable()
export class ProfessionalRepository{
    
    constructor(
        @InjectRepository(Professional)
        private readonly professioanlRepository: Repository<Professional>
    ){}

    async create(input: ProfessionalDTOs ){
       const dataProfessional =  await this.professioanlRepository.create(input)

        await this.professioanlRepository.save(dataProfessional)

        return 
    }
}