import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="bg-white max-w-md mx-auto mt-4">

      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold"> ToDo App </h1>
        <AddTask />
      </div>
      <TodoList />

    </main>
  )
} 
