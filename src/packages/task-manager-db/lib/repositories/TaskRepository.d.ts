import { Task } from '../entities';
import { TaskRepositoryInterface } from '../interfaces';
export declare class TaskRepository implements TaskRepositoryInterface {
    private readonly repository;
    constructor();
    save(task: Task): Promise<void>;
    findById(id: number): Promise<Task | null>;
}
