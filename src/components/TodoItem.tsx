import React from "react";
import { X } from "lucide-react";
import { Todo } from "../core/Todo";
import { motion } from "motion/react";
import { useTodoContext } from "../context/TodoContext";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { deleteTodo } = useTodoContext();

  const handleDeleteTodo = async () => {
    await deleteTodo(todo.id);
  };
  return (
    <motion.div
      className="relative px-3 py-4 flex items-center gap-2 hover:bg-gray-100 rounded-xl transition-all duration-300 mr-2"
      initial={{ opacity: 0, bottom: "100%" }}
      animate={{ opacity: 1, bottom: 0 }}
      transition={{ duration: 0 }}
    >
      <input type="checkbox" checked={false} className="h-6 w-6" />
      <p>{todo.title}</p>
      <X
        color="black"
        size={24}
        className="cursor-pointer absolute right-2"
        onClick={handleDeleteTodo}
      />
    </motion.div>
  );
}
