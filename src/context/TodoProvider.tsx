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
      createdAt: new Date(),
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

  const updateTodo = async (id: string, todo: Todo) => {
    await repo.updateTodo(id, todo);
    setTodos((prev) =>
      prev.map((existingTodo) => {
        if (existingTodo.id === id) {
          return todo;
        }
        return existingTodo;
      })
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, getTodos, deleteTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
