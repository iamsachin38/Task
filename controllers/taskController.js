const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
    const tasks = await Task.findAll();
    res.render('tasks/index', { tasks });
};

exports.getNewTaskForm = (req, res) => {
    res.render('tasks/new');
};

exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    await Task.create({ title, description });
    res.redirect('/tasks');
};

exports.getEditTaskForm = async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    res.render('tasks/edit', { task });
};

exports.updateTask = async (req, res) => {
    const { title, description, status } = req.body;
    await Task.update({ title, description, status }, {
        where: { id: req.params.id }
    });
    res.redirect('/tasks');
};

exports.deleteTask = async (req, res) => {
    await Task.destroy({ where: { id: req.params.id } });
    res.redirect('/tasks');
};
