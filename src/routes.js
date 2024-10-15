import { Router } from 'express';
import { NewsController } from './news.controller.js';

const router = Router();

router.get('/news', NewsController.listNews);

export default router;
