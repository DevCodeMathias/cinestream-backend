import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { IsString, IsNotEmpty } from 'class-validator';

@Entity('movies') 
export class Movie {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column({unique:true})
  title: string;

  @Column()
  year: string;

  @Column()
  released: string;

  @Column()
  runtime: string;

  @Column()
  genre: string;

  @Column()
  director: string;

  @Column()
  writer: string;

  @Column()
  actors: string;

  @Column()
  plot: string;

  @Column()
  language: string;

  @Column()
  country: string;
}
