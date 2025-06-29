"use client";

import { useState, useEffect } from "react";
import { Todo } from "../core/Todo";
import { TodoRepositoryImpl } from "../infrastructure/TodoRepositoryImpl";
import TodoContext from "./TodoContext";

export default function TodoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const repo = new TodoRepositoryImpl();

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await repo.getTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = async (title: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      title,
      completed: false,
    };
    await repo.addTodo(newTodo);
    setTodos((prev) => [...prev, newTodo]);
  };

  const getTodos = async () => {
    const data = await repo.getTodos();
    setTodos(data);
  };

  const deleteTodo = async (id: string) => {
    await repo.deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, getTodos, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
