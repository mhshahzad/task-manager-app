import { getRepository, Repository } from 'typeorm';
import { Task } from '../entities';
import { TaskRepositoryInterface } from '../interfaces';

export class TaskRepository implements TaskRepositoryInterface {
  private readonly repository: Repository<Task>;

  constructor() {
    const manager = getRepository(Task).manager;
    this.repository = getRepository(Task);
  }

  async save(task: Task): Promise<void> {
    await this.repository.save(task);
  }

  async findById(id: number): Promise<Task | null> {
    return this.repository.findOne({ where: { id: id } });
  }
}
