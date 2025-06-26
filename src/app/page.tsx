import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-900 to-purple-900 flex items-center justify-center">
      <TodoList />
    </div>
  );
}
