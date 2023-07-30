"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
class TaskRepository {
    constructor() {
        const manager = (0, typeorm_1.getRepository)(entities_1.Task).manager;
        this.repository = (0, typeorm_1.getRepository)(entities_1.Task);
    }
    async save(task) {
        await this.repository.save(task);
    }
    async findById(id) {
        return this.repository.findOne({ where: { id: id } });
    }
}
exports.TaskRepository = TaskRepository;
