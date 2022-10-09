import { NextFunction, Request, Response } from 'express';
import { ErrorResponder } from '../../../src/middlewares/error.middleware';

const errorResponder = new ErrorResponder().errorResponder;


describe('Error middleware', () => {
    let mockRequest: Partial<Request> = {};

    const mockResponse = {
        status: jest.fn(),
        send: jest.fn(),
        statusCode: 400
    }
    const mockResponseSent = { send: jest.fn() };
    mockResponse.status = jest.fn(() => {
      return mockResponseSent;
    });

    let nextFunction: NextFunction = jest.fn();

    it('with response', async () => {
        jest.spyOn(global.console, 'log')
        errorResponder({
            statusCode: 400,
            name: 'prueb',
            message: 'prueba'
        }, mockRequest as Request, mockResponse as unknown as Response, nextFunction);

        expect(console.log).toHaveBeenCalled();
    });
});