import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ProfessionalRepository } from "../repository/professional.repositoy";
import { last } from "rxjs";
import { ProfessionalDTOs } from "../dtos/profissional-create";
import { Professional } from "../entitys/professional.entity";
import { promises } from "dns";

@Injectable()
export class ProfessionalService{


    constructor(
        private readonly professionalRepository: ProfessionalRepository){}
        
    
    async register(input:ProfessionalDTOs):Promise<string>{
        try {
            const email = this.formatEmail(input.firstName, input.lastName);

            const professionalData: Omit<Professional, 'id'> = {
                ...input,
                email,
            }

            await this.professionalRepository.create(professionalData);
            return 'Professional successfully created';
            
        } catch (error) {
            console.error('Error creating professional:', error);
            throw new InternalServerErrorException('Failed to create professional');
            
        }
    }    


    private formatEmail(fisrtName: string ,lastName:string ){
        const email = `${fisrtName}_${lastName}@cine.com`
        return email
    }
}