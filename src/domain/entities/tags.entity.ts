import { v4 as uuidv4 } from 'uuid';

export type TagProps = {
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class Tag {
  public readonly id: string;
  public props: Required<TagProps>;

  constructor(props: TagProps, id?: string) {
    this.id = id || uuidv4();
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
    };
  }

  get name(): string {
    return this.props.name;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
