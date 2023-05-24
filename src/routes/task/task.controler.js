import {Router} from 'express'
import { getTask, getTaskId,postTask, putTaskId, deleteTaskId } from './task.services.js';


const router= Router();
// get task
router.get('/task', getTask);
// get task id
router.get('/task/:id', getTaskId);
// Create task
router.post('/task', postTask);
// update task
router.put('/task/:id', putTaskId)
// Delete task
router.delete('/task/:id', deleteTaskId)

export default router;