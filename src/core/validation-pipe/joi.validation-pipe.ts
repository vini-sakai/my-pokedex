import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ArraySchema, ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema | ArraySchema) {}
  transform(value: any, metadata?: ArgumentMetadata) {
    if (metadata && metadata.type === 'body') {
      const { error } = this.schema.validate(value);
      if (error) throw new BadRequestException(error);
    }
    return value;
  }
}
