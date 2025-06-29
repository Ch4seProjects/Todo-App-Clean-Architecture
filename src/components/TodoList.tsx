"use client";

import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { Todo } from "../core/Todo";
import { useTodoContext } from "../context/TodoContext";

export default function TodoList() {
  const { todos } = useTodoContext();

  return (
    <div className="bg-white p-8 rounded-xl flex flex-col gap-8">
      <div className="">
        <p className="text-3xl font-semibold text-gray-800">To-Do List</p>
        <p className="text-gray-600 mt-2">Your tasks will appear here</p>
      </div>
      <TodoInput />
      <div className="h-[300px] overflow-auto">
        {todos.length > 0 ? (
          todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <p className="text-gray-600 mt-2 italic text-center">
            You have no tasks.
          </p>
        )}
      </div>
    </div>
  );
}
