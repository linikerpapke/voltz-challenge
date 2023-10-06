export type ToolProps = {
  id?: number;
  title: string;
  link: string;
  description: string;
  tags?: number[];
  createdAt?: Date;
  updatedAt?: Date;
};

export class Tool {
  public props: Required<ToolProps>;

  constructor(props: ToolProps) {
    this.props = {
      ...props,
      id: props.id || null,
      tags: props.tags || [],
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
    };
  }

  get id(): number {
    return this.props.id;
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

  get tags(): number[] {
    return this.props.tags;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
