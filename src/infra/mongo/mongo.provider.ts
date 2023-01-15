import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import Papr from 'papr';

@Injectable()
export class MongoProvider {
  private connection: MongoClient;

  papr: Papr;

  constructor() {
    this.papr = new Papr();
  }

  async onModuleInit() {
    this.connection = await MongoClient.connect('mongodb://localhost:27017');
    this.papr.initialize(this.connection.db('my-pokedex'));
  }

  async onModuleDestroy() {
    this.connection.close();
  }
}
