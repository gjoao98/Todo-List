const routes = require("express").Router();
const TaskController = require("../controller/Taskcontroller");

routes.get("/", TaskController.getTasks);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id/:method", TaskController.getById);
routes.post("/update/:id", TaskController.updateTask);
routes.get("/deleteTask/:id", TaskController.deleteTask);

module.exports = routes;