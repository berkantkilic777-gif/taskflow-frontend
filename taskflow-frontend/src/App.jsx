import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskCard from './TaskCard';

export default function App() {
  
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('taskflow_tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('taskflow_tasks', JSON.stringify(tasks));
  }, [tasks]);

  
  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  
  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

 
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Başlık Alanı */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-500 tracking-tight">
            TaskFlow
          </h1>
          <p className="text-slate-400 mt-2">
            Görevlerini kolayca planla, takip et ve yönet!
          </p>
        </header>

       
        <main>
          
          <TaskForm onAddTask={handleAddTask} />

          
          <div className="max-w-xl mx-auto space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-semibold text-slate-300">
                Görevler ({tasks.length})
              </h2>
            </div>

            
            {tasks.length === 0 ? (
              <p className="text-center text-slate-500 py-8 text-sm">
                Henüz hiç görev eklenmedi. Yukarıdaki formdan yeni bir görev ekleyebilirsin!
              </p>
            ) : (
              tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggleComplete={handleToggleComplete}
                  onDeleteTask={handleDeleteTask}
                />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}