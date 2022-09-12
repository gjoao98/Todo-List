const routes = require("express").Router();
const TaskController = require("../controller/Taskcontroller");

routes.get("/", TaskController.getTasks);
routes.post("/create", TaskController.createTask);

module.exports = routes;