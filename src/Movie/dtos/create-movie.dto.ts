import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString()
  @IsNotEmpty()
  rated: string;

  @IsString()
  @IsNotEmpty()
  released: string;

  @IsString()
  @IsNotEmpty()
  runtime: string;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsString()
  @IsNotEmpty()
  director: string;

  @IsString()
  @IsNotEmpty()
  writer: string;

  @IsString()
  @IsNotEmpty()
  actors: string;

  @IsString()
  @IsNotEmpty()
  plot: string;

  @IsString()
  @IsNotEmpty()
  language: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}
