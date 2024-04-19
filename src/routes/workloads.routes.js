import express from 'express';
const workloadRouter = express.Router();
import { addWorkload, getWorkload } from '../controllers/workloads.controller.js';


workloadRouter.post('/add', addWorkload);
workloadRouter.get('/list', getWorkload);

export default workloadRouter;