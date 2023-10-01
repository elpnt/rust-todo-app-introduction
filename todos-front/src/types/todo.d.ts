export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface NewTodoPayload {
  text: string;
}
