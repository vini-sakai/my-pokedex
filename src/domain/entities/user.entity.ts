import { nanoid } from "nanoid";

export class User {
  _id: string;
  age: string;
  firstName: string;
  lastName: string;

  constructor(params) {
    this._id = params._id || nanoid().toString();
    this.age = params.age || null;
    this.firstName = params.firstName || null;
    this.lastName = params.lastName || null;
  }
}
