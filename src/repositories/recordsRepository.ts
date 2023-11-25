/* eslint-disable @typescript-eslint/no-unused-vars */

import Record from "@src/models/Record";

const records: Record[] = [];

async function readRecords(): Promise<Record[]> {
  return new Promise((res, rej) => {
    return res(records);
  });
}

async function readRecord(id: number): Promise<Record | undefined> {
  return new Promise((res, rej) => {
    return res(records.find((r) => r.id === id));
  });
}

async function createRecord(record: Record): Promise<Record> {
  return new Promise((res, rej) => {
    if (
      !record.sender_id ||
      !record.sender_email ||
      !record.receiver_email ||
      !record.success ||
      !record.content
    ) {
      rej(new Error("Missing fields"));
    }

    const newRecord = new Record(
      record.sender_id,
      record.sender_email,
      record.receiver_email,
      record.success,
      record.content,
    );

    records.push(newRecord);
    return res(newRecord);
  });
}

async function updateRecord(
  id: number,
  record: Record,
): Promise<Record | undefined> {
  return new Promise((res, rej) => {
    const index = records.findIndex((r) => r.id === id);

    if (
      !record.sender_id ||
      !record.sender_email ||
      !record.receiver_email ||
      !record.success ||
      !record.content
    ) {
      rej(new Error("Missing fields"));
    }

    const newRecord = new Record(
      record.sender_id,
      record.sender_email,
      record.receiver_email,
      record.success,
      record.content,
    );

    if (index === -1) {
      return res(undefined);
    }
    records[index] = newRecord;
    return res(newRecord);
  });
}

async function removeRecord(id: number): Promise<Record | undefined> {
  return new Promise((res, rej) => {
    const index = records.findIndex((r) => r.id === id);
    if (index === -1) {
      return res(undefined);
    }
    const record = records[index];
    records.splice(index, 1);
    return res(record);
  });
}

export default {
  readRecords,
  readRecord,
  createRecord,
  updateRecord,
  removeRecord,
};
