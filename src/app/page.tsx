import TodoList from "../components/TodoList";
import TodoProvider from "../context/TodoProvider";

export default async function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-900 to-purple-900 flex items-center justify-center">
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
}
