import { NextFunction, Request, Response } from "express";

function validate(schema: any) {
    const validation = (
        request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        console.log(request.body);

        return next();
    };

    return validation;
}

export { validate };
