import { UnprocessableEntityException } from '@nestjs/common';

export const handleErrorConstraintUnique = (error: Error): never => {
  const splittedMessage: string[] = error.message.split('`');

  const errorMessage = `O campo '${splittedMessage.at(
    -2,
  )}' não está respeitando a CONSTRAINT UNIQUE`;

  throw new UnprocessableEntityException(errorMessage);
};
