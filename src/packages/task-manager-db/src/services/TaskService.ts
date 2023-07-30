import { TaskPriority, TaskStatus } from 'task-manager-types';
import { TaskRepositoryInterface } from '../interfaces';
import { Task } from '../entities';

export class TaskService {
  constructor(private readonly taskRepository: TaskRepositoryInterface) {}

  async createTask(title: string, description: string, assignedTo: string, creator: string): Promise<void> {
    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = TaskStatus.Open;
    task.priority = TaskPriority.Medium;
    task.dueDate = null; // You can set the due date here if needed
    task.assignedTo = assignedTo;
    task.creator = creator;

    await this.taskRepository.save(task);
  }

  async getTaskById(id: number): Promise<Task | null> {
    return this.taskRepository.findById(id);
  }

  // Add other task-related methods as needed
}
