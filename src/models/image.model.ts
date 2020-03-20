import {Model, model, property} from '@loopback/repository';

@model({settings: {}})
export class Image extends Model {

  @property({
    type: 'string',
    required: true,
  })
  link: string;

  @property({
    type: 'string',
    required: false,
  })
  description: string;

  constructor(data?: Partial<Image>) {
    super(data);
  }
}
