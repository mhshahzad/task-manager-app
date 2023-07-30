"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const task_manager_types_1 = require("task-manager-types");
const entities_1 = require("../entities");
class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async createTask(title, description, assignedTo, creator) {
        const task = new entities_1.Task();
        task.title = title;
        task.description = description;
        task.status = task_manager_types_1.TaskStatus.Open;
        task.priority = task_manager_types_1.TaskPriority.Medium;
        task.dueDate = null; // You can set the due date here if needed
        task.assignedTo = assignedTo;
        task.creator = creator;
        await this.taskRepository.save(task);
    }
    async getTaskById(id) {
        return this.taskRepository.findById(id);
    }
}
exports.TaskService = TaskService;
