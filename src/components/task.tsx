import type { Task } from '../types'

const priorityColors = {
    high: "bg-red-200 text-red-800", 
    medium: "bg-yellow-200 text-yellow-800",
    low: "bg-blue-200 text-blue-800"
};

export const TaskCard = ({ title, description, priority }: Task) => {

    const badgeColorClass = priorityColors[priority] || "bg-gray-500";
    
    return (
        <div className="bg-white p-3 rounded mb-2 border-gray-200 border border-gray-200">
        <h3 className="text-lg mb-1">{title}</h3>
        <h4 className="text-sm text-gray-600 mb-3">{description}</h4>
        <span className={`items-end p-1 px-2 rounded-full text-xs capitalize ${badgeColorClass}`}>{priority}</span>
        </div>
    );
};