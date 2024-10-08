import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Professional {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    jobTitle: string;
  
    @Column()
    department: string;
  

}