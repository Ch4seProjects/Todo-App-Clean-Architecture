import React from "react";
import { X } from "lucide-react";

export default function TodoList() {
  return (
    <div className="bg-white p-8 rounded-xl flex flex-col gap-8">
      <div className="">
        <p className="text-3xl font-semibold text-gray-800">To-Do List</p>
        <p className="text-gray-600 mt-2">Your tasks will appear here</p>
      </div>
      <div className="bg-gray-100 w-[500px] h-[60px] rounded-full relative">
        <input
          placeholder="Add a task"
          className="w-full h-full rounded-full px-6 py-2 flex-1"
        />
        <button className="bg-orange-600 text-white rounded-full p-2 absolute right-0 h-full w-[150px]">
          Add
        </button>
      </div>
      <div className="relative">
        <div className="p-2 flex items-center gap-2">
          <input type="checkbox" checked={false} className="h-6 w-6" />
          <p>Task 1</p>
          <X
            color="black"
            size={24}
            className="cursor-pointer absolute right-2"
          />
        </div>
      </div>
    </div>
  );
}
