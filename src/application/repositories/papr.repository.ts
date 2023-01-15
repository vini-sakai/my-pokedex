import { BaseSchema, Model } from 'papr';
import { IRepository } from './repository.interface';

/**
 * Papr repository CRUD abstraction.
 * @template T is the domain's entity type
 * @template TSchema is the Document type representation (type of paprSchema)
 * @template TModel is the model created with papr.model('potatos', potatoSchema). It will also provide this same model as this.model.
 * @about For more information about papr implementation see https://plexinc.github.io/papr/#/getting-started
 */
export abstract class PaprRepository<
  T,
  TSchema extends BaseSchema,
  TModel extends Model<TSchema, object>,
> implements IRepository<T>
{
  constructor(readonly model: TModel) {}

  async findById(_id: string): Promise<T> {
    const found = await this.model.findOne({ _id } as TSchema);
    if (!found) return null as any;
    return this.toDomain(found);
  }

  async findAll(): Promise<T[]> {
    const found = await this.model.find({});
    return found.map(this.toDomain);
  }

  async create(object: T): Promise<any> {
    await this.model.insertOne(this.toPersistence(object));
  }

  async update(_id: any, object: T): Promise<any> {
    await this.model.findOneAndUpdate(
      { _id },
      { $set: this.toPersistence(object) },
    );
  }

  abstract toDomain(object: any): T;
  abstract toPersistence(domain: T): any;
}
