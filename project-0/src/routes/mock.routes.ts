import { Router } from 'express';
import { getMockData } from '../controllers/mock.controller';

const router = Router();
// Create a new Express Router instance

router.get('/mockData', getMockData);

export default router;