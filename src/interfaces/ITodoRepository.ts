import { Todo } from "../core/Todo";

export interface ITodoRepository {
  getTodos: () => Promise<Todo[]>;
  addTodo: (todo: Todo) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
}
