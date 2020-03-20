import {Entity, model, property} from '@loopback/repository';
import {Image} from './image.model';

@model({settings: {}})
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string;

  @property({
    type: 'boolean',
    default: true,
    required: false,
  })
  enabled: boolean;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: Image,
    required: true,
  })
  image: Image;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Account & ProductRelations;
