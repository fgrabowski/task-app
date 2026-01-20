import { useState } from 'react'
import type { Task } from '../types.tsx';

export function Board() {

  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
    <div className="min-h-screen bg-gray-400 p-8">
      
      <h1 className="text-3xl font-bold mb-8 text-center">Tasks list</h1> 

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">To Do</h2> 
          <div className="bg-blue-100 p-3 rounded mb-2">
            <h3 className="text-lg font-bold mb-3">Zrozumieć JSX</h3>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">In Progress</h2> 
          <div className="bg-yellow-200 p-3 rounded mb-2">
            <h3 className="text-lg font-bold mb-3">Nauczyć się Tailwind CSS</h3>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Done</h2> 
          <div className="bg-green-200 p-3 rounded mb-2">
            <h3 className="text-lg font-bold mb-3">Nauczyć się Tailwind CSS</h3>
          </div>
        </div>

      </div> 
      
      <div className="flex justify-center"> 
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full mt-6 object-center">
        Add Task
        </button>
      </div>

    </div>
    </>
  )
}

export default Board;
