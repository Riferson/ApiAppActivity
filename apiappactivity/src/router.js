const express = require('express');
const router = express.Router();

const taskController = require('./controllers/tasksControllers');
const taskMiddlewares = require('./middlewares/tasksMiddlewares');

router.get('/tasks',taskController.getAll);
router.post('/tasks',taskMiddlewares.validateFieldTitle,taskController.createTask);
router.delete('/tasks/:id',taskController.deleteTask);
router.put('/tasks/:id',taskMiddlewares.validateFieldTitle,taskMiddlewares.validateFieldStatus,taskController.updateTask);

module.exports = router;