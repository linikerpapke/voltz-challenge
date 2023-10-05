import { IsString, IsUrl, IsArray } from 'class-validator';

export class CreateToolDto {
  @IsString()
  title: string;

  @IsUrl()
  link: string;

  @IsString()
  description: string;

  @IsArray()
  tags: string[];
}
