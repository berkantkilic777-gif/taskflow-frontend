import { useState, useEffect, useMemo } from 'react';
import TaskForm from './TaskForm';
import TaskCard from './TaskCard';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('taskflow_tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'pending', 'completed'
  const [filterPriority, setFilterPriority] = useState('all'); // 'all', 'Düşük', 'Orta', 'Yüksek'

  useEffect(() => {
    localStorage.setItem('taskflow_tasks', JSON.stringify(tasks));
  }, [tasks]);

  
  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  
  const handleUpdateTask = (taskId, updatedFields) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedFields } : task
      )
    );
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

  
  const handleClearCompleted = () => {
    if (window.confirm('Tamamlanan tüm görevleri silmek istediğinize emin misiniz?')) {
      setTasks(tasks.filter((t) => !t.completed));
    }
  };

  
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (task.description && task.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (task.assignee && task.assignee.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesStatus =
        filterStatus === 'all'
          ? true
          : filterStatus === 'completed'
          ? task.completed
          : !task.completed;

      const matchesPriority =
        filterPriority === 'all' ? true : task.priority === filterPriority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tasks, searchQuery, filterStatus, filterPriority]);

  
  const totalCount = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = totalCount - completedCount;
  const completionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <header className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            Frontend Workspace
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Task<span className="text-blue-500">Flow</span>
          </h1>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
            Modern, hızlı ve responsive görev ve iş akışı yönetim paneli.
          </p>
        </header>

        
        <div className="max-w-2xl mx-auto bg-slate-800/80 border border-slate-700/80 p-5 rounded-2xl shadow-lg backdrop-blur space-y-4">
          <div className="grid grid-cols-3 gap-4 text-center divide-x divide-slate-700/60">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Toplam</p>
              <p className="text-2xl font-bold text-white mt-1">{totalCount}</p>
            </div>
            <div>
              <p className="text-xs text-amber-400 uppercase tracking-wider font-semibold">Bekleyen</p>
              <p className="text-2xl font-bold text-amber-300 mt-1">{pendingCount}</p>
            </div>
            <div>
              <p className="text-xs text-emerald-400 uppercase tracking-wider font-semibold">Tamamlanan</p>
              <p className="text-2xl font-bold text-emerald-400 mt-1">{completedCount}</p>
            </div>
          </div>

          
          <div className="space-y-1.5 pt-2 border-t border-slate-700/60">
            <div className="flex justify-between text-xs text-slate-400 font-medium">
              <span>Tamamlanma Oranı</span>
              <span className="text-blue-400 font-bold">%{completionRate}</span>
            </div>
            <div className="w-full bg-slate-700/60 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>
        </div>

        
        <main className="space-y-8">
          <TaskForm onAddTask={handleAddTask} />

          
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Başlık, açıklama veya kişide ara..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg
                  className="w-4 h-4 text-slate-400 absolute left-3 top-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Tüm Öncelikler</option>
                <option value="Düşük">Düşük</option>
                <option value="Orta">Orta</option>
                <option value="Yüksek">Yüksek</option>
              </select>
            </div>

            
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="inline-flex rounded-lg bg-slate-800/80 p-1 border border-slate-700/60">
                {[
                  { id: 'all', label: 'Tümü' },
                  { id: 'pending', label: 'Bekleyen' },
                  { id: 'completed', label: 'Tamamlanan' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFilterStatus(tab.id)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                      filterStatus === tab.id
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {completedCount > 0 && (
                <button
                  onClick={handleClearCompleted}
                  className="text-xs text-rose-400 hover:text-rose-300 font-medium transition-colors"
                >
                  Tamamlananları Temizle ({completedCount})
                </button>
              )}
            </div>

          
            <div className="space-y-3">
              {filteredTasks.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-slate-800 rounded-2xl bg-slate-900/40">
                  <p className="text-slate-400 text-sm font-medium">
                    {searchQuery || filterStatus !== 'all' || filterPriority !== 'all'
                      ? 'Arama kriterlerinize uygun görev bulunamadı.'
                      : 'Henüz hiç görev bulunmuyor. Yeni bir görev oluşturun!'}
                  </p>
                </div>
              ) : (
                filteredTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onToggleComplete={handleToggleComplete}
                    onDeleteTask={handleDeleteTask}
                    onUpdateTask={handleUpdateTask}
                  />
                ))
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}