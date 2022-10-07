import { UnprocessableEntityException } from '@nestjs/common';

export const handleErrorConstraintUnique = (error: Error): never => {
  const splittedMessage: string[] = error.message.split('`');

  const errorMessage = `The field '${splittedMessage.at(
    -2,
  )}' is not respecting the unique constraint.`;

  throw new UnprocessableEntityException(errorMessage);
};
