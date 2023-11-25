import { Router } from "express";
import recordsControllers from "@src/controllers/recordsControllers";

const router = Router();

router.get("/", recordsControllers.getRecords);

router.get("/:id", recordsControllers.getRecord);

router.post("/", recordsControllers.postRecord);

router.put("/:id", recordsControllers.putRecord);

router.delete("/:id", recordsControllers.deleteRecord);

export default router;
