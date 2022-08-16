export enum TODO_PRIORITY {
  HIGH = 'HIGH',
  MID = 'MID',
  LOW = 'LOW',
}

export interface ITodo {
  readonly id: number;
  readonly priority: keyof typeof TODO_PRIORITY;
  content: string;
  completed: boolean;
}