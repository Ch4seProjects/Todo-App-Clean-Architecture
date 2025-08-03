"use client";

import { createContext, useContext } from "react";
import { Todo } from "../core/Todo";

type TodoContextType = {
  todos: Todo[];
  addTodo: (title: string) => Promise<void>;
  getTodos: () => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  updateTodo: (id: string, todo: Todo) => Promise<void>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
}

export default TodoContext;
