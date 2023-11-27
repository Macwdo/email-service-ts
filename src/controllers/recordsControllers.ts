import { NextFunction, Request, Response } from "express";
import { ApiErrorResponse } from "@src/models/ApiErrorResponse";
import Record from "@src/models/Record";
import recordsRepository from "@src/repositories/recordsRepository";

async function getRecords(
    req: Request,
    res: Response<Record[] | ApiErrorResponse>,
) {
    const records = await recordsRepository.readRecords();
    res.send(records);
}

async function getRecord(
    req: Request,
    res: Response<Record | ApiErrorResponse>,
) {
    const id: number = parseInt(req.params.id);
    const record = await recordsRepository.readRecord(id);

    if (!record) {
        return res.status(404).send({
            error: "Record not found",
            statusCode: 404,
        });
    }

    return res.send(record);
}

async function postRecord(
    req: Request,
    res: Response<Record | ApiErrorResponse>,
    next: NextFunction,
) {
    const recordRequest: Record = req.body;
    try {
        const record = await recordsRepository.createRecord(recordRequest);
        return res.status(201).send(record);
    } catch (error) {
        return next(error);
    }
}

async function putRecord(
    req: Request,
    res: Response<Record | ApiErrorResponse>,
    next: NextFunction,
) {
    const id: number = parseInt(req.params.id);
    const recordRequest: Record = req.body;

    const record = await recordsRepository.readRecord(id);
    if (!record) {
        return res.status(404).send({
            error: "Record not found",
            statusCode: 404,
        });
    }

    try {
        const updatedRecord = await recordsRepository.updateRecord(
            id,
            recordRequest,
        );
        return res.send(updatedRecord);
    } catch (error) {
        return next(error);
    }
}

async function deleteRecord(
    req: Request,
    res: Response<Record | ApiErrorResponse>,
    next: NextFunction,
) {
    const id: number = parseInt(req.params.id);

    const record = await recordsRepository.readRecord(id);
    if (!record) {
        return res.status(404).send({
            error: "Record not found",
            statusCode: 404,
        });
    }

    try {
        const deletedRecord = await recordsRepository.removeRecord(id);
        return res.send(deletedRecord);
    } catch (error) {
        return next(error);
    }
}

export default {
    getRecords,
    getRecord,
    postRecord,
    putRecord,
    deleteRecord,
};
