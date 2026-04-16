import { Router } from 'express';
import { createItem } from '../controllers/item.controller.js';
import { getItems } from '../controllers/item.controller.js';

const router = Router();
router.route("/create").post(createItem);
router.route("/getItems").get(getItems);
export default router;