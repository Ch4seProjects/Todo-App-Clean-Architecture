import React from "react";
import { X } from "lucide-react";
import { Todo } from "../core/Todo";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="relative px-3 py-4 flex items-center gap-2 hover:bg-gray-100 rounded-xl transition-all duration-300">
      <input type="checkbox" checked={false} className="h-6 w-6" />
      <p>{todo.title}</p>
      <X color="black" size={24} className="cursor-pointer absolute right-2" />
    </div>
  );
}
