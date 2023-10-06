export interface CreateToolDTO {
  id?: number;
  title: string;
  link: string;
  description: string;
  //tags?: number[] | string[];
  tags?: (number | string)[] | [{}];
}
