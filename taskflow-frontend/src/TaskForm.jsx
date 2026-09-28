import { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Orta');
  const [assignee, setAssignee] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: crypto.randomUUID(),
      title, 
      description,
      priority,
      assignee,
      completed: false, 
      createdAt: new Date().toLocaleDateString('tr-TR'),
    };

    onAddTask(newTask);

    
    setTitle('');
    setDescription('');
    setPriority('Orta');
    setAssignee('');
  };

  
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 border border-slate-700 p-6 rounded-xl shadow-lg space-y-4 max-w-xl mx-auto mb-8"
    >
      <h2 className="text-xl font-bold text-white mb-2">Yeni Görev Oluştur</h2>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">
          Görev Başlığı *
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Örn: Backend API entegrasyonu"
          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">
          Açıklama
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Görev detayları..."
          rows="3"
          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Öncelik
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Düşük">Düşük</option>
            <option value="Orta">Orta</option>
            <option value="Yüksek">Yüksek</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Atanan Kişi
          </label>
          <input
            type="text"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            placeholder="Örn: Berkant"
            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md cursor-pointer"
      >
        Görevi Ekle
      </button>
    </form>
  );
}