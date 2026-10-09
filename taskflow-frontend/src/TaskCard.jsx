import { useState } from 'react';

export default function TaskCard({
  task,
  onToggleComplete,
  onDeleteTask,
  onUpdateTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDesc, setEditDesc] = useState(task.description || '');
  const [editPriority, setEditPriority] = useState(task.priority || 'Orta');
  const [editAssignee, setEditAssignee] = useState(task.assignee || '');

  const priorityColors = {
    'Düşük': 'bg-emerald-950/80 text-emerald-400 border-emerald-800',
    'Orta': 'bg-amber-950/80 text-amber-400 border-amber-800',
    'Yüksek': 'bg-rose-950/80 text-rose-400 border-rose-800',
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!editTitle.trim()) return;
    onUpdateTask(task.id, {
      title: editTitle,
      description: editDesc,
      priority: editPriority,
      assignee: editAssignee,
    });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form
        onSubmit={handleSave}
        className="p-5 rounded-xl border border-blue-500/50 bg-slate-800/90 shadow-lg space-y-3 transition-all"
      >
        <div className="flex items-center justify-between border-b border-slate-700 pb-2">
          <span className="text-sm font-semibold text-blue-400">Görevi Düzenle</span>
          <span className="text-xs text-slate-400">ID: {task.id.slice(0, 8)}...</span>
        </div>

        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="Görev başlığı"
          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          value={editDesc}
          onChange={(e) => setEditDesc(e.target.value)}
          placeholder="Açıklama"
          rows="2"
          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-2 gap-3">
          <select
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
            className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Düşük">Düşük</option>
            <option value="Orta">Orta</option>
            <option value="Yüksek">Yüksek</option>
          </select>

          <input
            type="text"
            value={editAssignee}
            onChange={(e) => setEditAssignee(e.target.value)}
            placeholder="Atanan kişi"
            className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
          >
            İptal
          </button>
          <button
            type="submit"
            className="px-3 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Kaydet
          </button>
        </div>
      </form>
    );
  }

  return (
    <div
      className={`p-5 rounded-xl border transition-all duration-200 shadow-md ${
        task.completed
          ? 'bg-slate-900/60 border-slate-800 opacity-70'
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
          className={`text-xs font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap ${
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

      <div className="flex items-center justify-end gap-2 mt-4 pt-2 border-t border-slate-700/40">
        <button
          onClick={() => setIsEditing(true)}
          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
        >
          Düzenle
        </button>

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