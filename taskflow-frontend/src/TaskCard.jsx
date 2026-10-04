export default function TaskCard({ task, onToggleComplete, onDeleteTask }) {
  
  const priorityColors = {
    Düşük: 'bg-emerald-950 text-emerald-400 border-emerald-800',
    Orta: 'bg-amber-950 text-amber-400 border-amber-800',
    Yüksek: 'bg-rose-950 text-rose-400 border-rose-800',
  };

  return (
    <div
      className={`p-5 rounded-xl border transition-all duration-200 shadow-md ${
        task.completed
          ? 'bg-slate-900/60 border-slate-800 opacity-60'
          : 'bg-slate-800 border-slate-700 hover:border-slate-600'
      }`}
    >
      
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3
          className={`text-lg font-bold text-white transition-all ${
            task.completed ? 'line-through text-slate-500' : ''
          }`}
        >
          {task.title}
        </h3>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
            priorityColors[task.priority] || priorityColors.Orta
          }`}
        >
          {task.priority}
        </span>
      </div>

      
      {task.description && (
        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
          {task.description}
        </p>
      )}

      
      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-700/60 pt-3 mt-2">
        <div className="flex items-center gap-2">
          <span>Atanan:</span>
          <span className="text-slate-200 font-medium">
            {task.assignee ? task.assignee : 'Atama Yapılmadı'}
          </span>
        </div>
        <span>{task.createdAt}</span>
      </div>

      
      <div className="flex items-center justify-end gap-2 mt-4 pt-2">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
            task.completed
              ? 'bg-amber-600/20 text-amber-400 hover:bg-amber-600/30'
              : 'bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30'
          }`}
        >
          {task.completed ? 'Geri Al' : 'Tamamla'}
        </button>

        <button
          onClick={() => onDeleteTask(task.id)}
          className="px-3 py-1.5 rounded-lg text-xs font-medium text-rose-400 bg-rose-600/20 hover:bg-rose-600/30 cursor-pointer transition-colors"
        >
          Sil
        </button>
      </div>
    </div>
  );
}