export type TagProps = {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class Tag {
  public props: Required<TagProps>;

  constructor(props: TagProps) {
    this.props = {
      ...props,
      id: props.id || null,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
    };
  }

  get id(): number | null {
    return this.props.id;
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
