'use client';

import TaskList from '@/components/TaskList';

type Task = {
    id: string;
    title: string;
    description?: string | null;
    date: string;
    completed: boolean;
    priority: string;
};

type TaskSectionProps = {
    tasks: Task[];
    selectedDate: Date;
    onToggle: (id: string, completed: boolean) => void;
    onDelete: (id: string) => void;
    onAddTask: () => void;
};

export default function TaskSection({
    tasks,
    selectedDate,
    onToggle,
    onDelete,
    onAddTask
}: TaskSectionProps) {
    return (
        <div className="bg-card rounded-lg shadow p-6 overflow-y-auto h-120">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Tasks</h2>
                <button
                    onClick={onAddTask}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                    + Add Task
                </button>
            </div>

            <TaskList
                tasks={tasks}
                selectedDate={selectedDate}
                onToggle={onToggle}
                onDelete={onDelete}
            />
        </div>
    );
}
