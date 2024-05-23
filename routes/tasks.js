const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTasks);
router.get('/new', taskController.getNewTaskForm);
router.post('/', taskController.createTask);
router.get('/:id/edit', taskController.getEditTaskForm);
router.post('/:id', taskController.updateTask);
router.post('/:id/delete', taskController.deleteTask);

module.exports = router;
