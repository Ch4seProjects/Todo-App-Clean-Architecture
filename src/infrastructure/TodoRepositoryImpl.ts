import { Todo } from "../core/Todo";
import { ITodoRepository } from "../interfaces/ITodoRepository";

export class TodoRepositoryImpl implements ITodoRepository {
  private todos: Todo[] = [];

  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }

  async addTodo(todo: Todo): Promise<void> {
    this.todos.push(todo);
  }

  async deleteTodo(id: string): Promise<void> {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
