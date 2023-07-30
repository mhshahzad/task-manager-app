import { Task } from './Task';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    tasksCreated: Task[];
    tasksAssigned: Task[];
    createdAt: Date;
    updatedAt: Date;
}
