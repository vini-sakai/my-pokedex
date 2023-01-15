export class Response {
  // TODO: create better response
  static success(createdObject: any, message: string) {
    return {
      message: message,
      value: createdObject,
    };
  }
}
