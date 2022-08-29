import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    // console.log(value);
    // console.log(metadata);

    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not in the status options`);
    }
    return value;
  }

  private isStatusValid(status: any): boolean {
    const index = this.StatusOptions.indexOf(status);

    return index !== -1;
  }
}
