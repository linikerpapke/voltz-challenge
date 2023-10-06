export interface CreateToolDTO {
  id?: string;
  title: string;
  link: string;
  description: string;
  tags?: string[];
  //tags?: (number | string)[] | [{}];
}
