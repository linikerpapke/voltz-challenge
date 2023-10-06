import { v4 as uuidv4 } from 'uuid';

export type ToolProps = {
  title: string;
  link: string;
  description: string;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export class Tool {
  public readonly id: string;
  public props: Required<ToolProps>;

  constructor(props: ToolProps, id?: string) {
    this.id = id || uuidv4();
    this.props = {
      ...props,
      tags: props.tags || [],
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
    };
  }

  get title(): string {
    return this.props.title;
  }

  get link(): string {
    return this.props.link;
  }

  get description(): string {
    return this.props.description;
  }

  get tags(): string[] {
    return this.props.tags;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
