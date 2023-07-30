import { TaskRepositoryInterface } from '../interfaces';
import { Task } from '../entities';
export declare class TaskService {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepositoryInterface);
    createTask(title: string, description: string, assignedTo: string, creator: string): Promise<void>;
    getTaskById(id: number): Promise<Task | null>;
}
