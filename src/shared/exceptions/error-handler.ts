import { Request, Response, NextFunction } from 'express';
import { httpCodes } from '../utils/http-codes';

export const ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res
    .status(httpCodes.INTERNAL_SERVER_ERROR)
    .json({ err: 'some error was occured' });
};
