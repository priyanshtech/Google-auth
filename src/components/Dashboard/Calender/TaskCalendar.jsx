'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function TaskCalendar({ tasks, onDateSelect }) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Handle when user clicks a date
    const handleDateClick = (date) => {
        setSelectedDate(date);
        onDateSelect(date);
    };

    // Add custom class to tiles with tasks
    const tileClassName = ({ date }) => {
        const dateStr = date.toISOString().split('T')[0];
        const hasTasks = tasks.some(task => {
            const taskDate = new Date(task.date).toISOString().split('T')[0];
            return taskDate === dateStr;
        });

        return hasTasks ? 'has-tasks' : '';
    };

    return (
        <div className="bg-card rounded-lg border border-border p-5">
            <h2 className="text-base font-medium mb-4 text-card-foreground">Calendar</h2>
            <div className="calendar-container">
                <Calendar
                    onChange={(value) => handleDateClick(value)}
                    value={selectedDate}
                    tileClassName={tileClassName}
                    className="rounded-md border border-border"
                />
            </div>
        </div>
    );
}
