import { IsString } from "class-validator";

export class ProfessionalDTOs{
    
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    jobTitle: string;

    @IsString()
    department: string;

  
}