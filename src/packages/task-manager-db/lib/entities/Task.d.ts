import { TaskPriority, TaskStatus } from "task-manager-types";
export declare class Task {
    id: number;
    title: string;
    description: string | null;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: Date | null;
    assignedTo: string;
    creator: string;
    createdAt: Date;
    updatedAt: Date;
}
