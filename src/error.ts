import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
  }
}

const handleErrors = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  if (err instanceof ZodError) {
    return res.status(400).json(err.flatten().fieldErrors);
  }
  // Details should be logged server-side; never expose internals to the caller.
  console.error("Unhandled server error", err);
  return res.status(500).json({ message: "internal server error" });
};

export { AppError, handleErrors };
