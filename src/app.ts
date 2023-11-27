import express, { NextFunction, Request, Response, json } from "express";
import recordsRouter from "@src/routes/recordsRouter";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { ApiErrorResponse } from "@src/models/ApiErrorResponse";
import { validate } from "@src/validation";

const app = express();

app.use(morgan("tiny"));

app.use(cors());

app.use(helmet());

app.use(json());

app.use("/records", recordsRouter);

app.get("/", validate({}), (req, res) => res.json(req.body));

// const schemaRecord = {
// sender_id:
// sender_email: string;
// receiver_email: string;
// success: boolean;
// content: string;
// }

app.use(
    (
        error: Error,
        req: Request,
        res: Response<ApiErrorResponse>,
        next: NextFunction,
    ) => {
        res.status(500).send({
            error: error.message || "An unknown error has occurred",
            statusCode: 500,
        });
        next();
    },
);

export default app;
