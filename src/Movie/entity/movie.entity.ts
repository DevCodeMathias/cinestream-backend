import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsNotEmpty } from 'class-validator';

@Entity('movies') 
export class Movie {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column()
  title: string;

  @Column()
  year: string;

  @Column()
  rated: string;

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
