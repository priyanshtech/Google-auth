'use client';

import TaskCalendar from '@/components/TaskCalendar';

type Task = {
    id: string;
    title: string;
    date: string;
    completed: boolean;
    priority: string;
};

type CalendarSectionProps = {
    tasks: Task[];
    onDateSelect: (date: Date) => void;
};

export default function CalendarSection({ tasks, onDateSelect }: CalendarSectionProps) {
    return (
        <div className="bg-card rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4 text-card-foreground">Calendar</h2>
            <TaskCalendar tasks={tasks} onDateSelect={onDateSelect} />
        </div>
    );
}
