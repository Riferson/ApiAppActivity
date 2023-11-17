const { response } = require('../app');
const taskModel = require('../models/taskModel');


const getAll = async (req,res)=>{
    const tasks = await taskModel.getAll();

    return res.status(200).json(tasks);
};

const createTask =  async (req,res) =>{
    const createTask = await taskModel.createTask(req.body);
    return res.status(201).json(createTask);
}

const deleteTask = async(req,res) =>{
    const {id} = req.params;

    await taskModel.deleteTask(id);
    return res.status(204).json({Message:'deletado com sucesso'})
}

const updateTask = async(req,res) =>{
    const {id} = req.params;

    await taskModel.updateTask(id,req.body);
    return res.status(204).json();
}


module.exports = {
    getAll,createTask,deleteTask,updateTask
};