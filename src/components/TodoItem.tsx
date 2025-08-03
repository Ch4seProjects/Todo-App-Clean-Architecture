import React, { useState } from "react";
import { X, Edit, Check } from "lucide-react";
import { Todo } from "../core/Todo";
import { motion } from "motion/react";
import { useTodoContext } from "../context/TodoContext";
import { handleKeyDown } from "../utils/onKeyDown";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { deleteTodo, updateTodo } = useTodoContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleDeleteTodo = async () => {
    await deleteTodo(todo.id);
  };

  const handleUpdateTodo = async () => {
    const trimmedTitle = editedTitle.trim();

    if (!trimmedTitle || trimmedTitle === todo.title) {
      setIsEditing(false);
      return;
    }

    await updateTodo(todo.id, { ...todo, title: trimmedTitle });
    setIsEditing(false);
  };

  return (
    <motion.div
      className="relative px-3 py-4 flex items-center gap-2 hover:bg-gray-100 rounded-xl transition-all duration-300 mr-2"
      initial={{ opacity: 0, bottom: "100%" }}
      animate={{ opacity: 1, bottom: 0 }}
      transition={{ duration: 0 }}
    >
      <input type="checkbox" checked={false} className="h-6 w-6" />
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          autoFocus
          className="border-none outline-none w-full"
          onKeyDown={(e) => handleKeyDown(e, handleUpdateTodo)}
        />
      ) : (
        <p>{todo.title}</p>
      )}
      <div className="h-full flex items-center justify-center gap-2 absolute right-2 top-0">
        {isEditing ? (
          <Check
            size={24}
            className="cursor-pointer text-green-600"
            onClick={handleUpdateTodo}
          />
        ) : (
          <Edit
            size={24}
            className="cursor-pointer"
            onClick={() => setIsEditing(true)}
          />
        )}
        <X
          size={24}
          className="cursor-pointer text-black-600 hover:text-red-600 transition-all duration-300"
          onClick={handleDeleteTodo}
        />
      </div>
    </motion.div>
  );
}
