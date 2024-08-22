import { Body, Controller, Post } from "@nestjs/common";
import { ProfessionalDTOs } from "../dtos/profissional-create";
import { ProfessionalService } from "../service/profissional.service";

@Controller('professional')
export class ProfessionalController{

    constructor(private readonly professioanlService:ProfessionalService){}

    @Post()
    async createProfessioanal(@Body()  input: ProfessionalDTOs){
        return await this.professioanlService.register(input)
    }

}