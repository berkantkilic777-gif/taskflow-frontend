import { useState } from 'react';
import TaskForm from './TaskForm';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header>
          <h1 className="text-4xl font-extrabold text-blue-500 tracking-tight">
             TaskFlow
          </h1>
          <p className="text-slate-400 mt-2">
             Görevlerini kolayca planla, takip et ve yönet!!
          </p>
        </header>
        <main>
          <TaskForm onAddTask={handleAddTask}/>
        </main>
      </div>
    </div>
  );
}