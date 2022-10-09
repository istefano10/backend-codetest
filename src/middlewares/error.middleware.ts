import { NextFunction, Request, Response } from 'express';

class AppError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);

        Object.setPrototypeOf(this, new.target.prototype);
        this.name = Error.name;
        this.statusCode = statusCode;
    }
}

export class ErrorResponder {

    errorResponder = (error: AppError, request: Request, response: Response, next: NextFunction) => {
        // console.log(response)
        // response.header('Content-Type', 'application/json')

        const status = error.statusCode || 400
        const errorRes = {
            message: error.message,
        }
        console.log('Error => ', error.message);
        response.status(status).send(errorRes)
    }
}
