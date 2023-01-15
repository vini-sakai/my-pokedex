export interface IRepository<T> {
  findById(_id: string): Promise<T>;
  findAll(): Promise<T[]>;
  create(object: T): Promise<any>;
  update(_id: string, object: T): Promise<any>;
}
