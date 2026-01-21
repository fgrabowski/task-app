import { TaskCard } from '../components/task.tsx'; 
import type { Task } from '../types.tsx';

interface ColumnProps {
  title: string;
  dotColor: string;
  tasks: Task[];   
}

export const Column = ({ title, dotColor, tasks }: ColumnProps) => {
  return (
    <div className="bg-gray-100 rounded-2xl p-4 flex flex-col gap-4">

      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            {title} <span className="text-gray-400 font-normal ml-1">({tasks.length})</span>
        </h3>
      </div>


      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
};