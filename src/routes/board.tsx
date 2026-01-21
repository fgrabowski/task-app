// Board.tsx
import { useState } from 'react';
import { Column } from '../components/column.tsx';
import type { Task } from '../types.tsx'; // Załóżmy, że masz ten typ


const MOCK_TASKS: Task[] = [
  { id: '1', title: 'Nauczyć się Reacta', description: 'Podstawy komponentów', priority: 'high', status: 'todo' },
  { id: '2', title: 'Zrobić kawę', description: 'Kluczowe dla projektu', priority: 'medium', status: 'in-progress' },
  { id: '3', title: 'Zainstalować backend', description: 'Bez tego ani rusz, będzie w TypeScript', priority: 'low', status: 'done' },
  { id: '4', title: 'Zrobić imprezę', description: 'Z okazji otwarcia aplikacji', priority: 'high', status: 'in-progress' }
];

export function Board() {
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

  const todoTasks = tasks.filter(t => t.status === 'todo');
  const inProgressTasks = tasks.filter(t => t.status === 'in-progress');
  const doneTasks = tasks.filter(t => t.status === 'done');

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl mb-1 font-bold">Tasks</h1>
      <h3 className="text-sm text-gray-500 mb-8">Manage your work efficiently</h3>
      
      <hr className="mb-8 border-gray-100" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <Column 
          title="To do" 
          dotColor="bg-yellow-500" 
          tasks={todoTasks} 
        />

        <Column 
          title="In Progress" 
          dotColor="bg-blue-500" 
          tasks={inProgressTasks} 
        />

        <Column 
          title="Done" 
          dotColor="bg-green-500" 
          tasks={doneTasks} 
        />

      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
          + Add Task
        </button>
      </div>
    </div>
  );
}

export default Board;