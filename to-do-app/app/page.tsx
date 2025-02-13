import { get } from "http";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "@/api";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className="bg-white max-w-md mx-auto mt-4">

      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold"> ToDo App </h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />

    </main>
  )
} 
