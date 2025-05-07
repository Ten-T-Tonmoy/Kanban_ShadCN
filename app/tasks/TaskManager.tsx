"use client";

import React, { useEffect, useState } from "react";

type Status = "Incompleted" | "Ongoing" | "Finished";

interface Task {
  id: number;
  text: string;
  status: Status;
}

const statuses: Status[] = ["Incompleted", "Ongoing", "Finished"];

const KanbanTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("kanbanTasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTask, setNewTask] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  }, [tasks]);

  const taskAdd = (): void => {
    if (!newTask.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask.trim(),
        status: "Incompleted",
      },
    ]);
    setNewTask("");
  };

  const taskRemove = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const taskMove = (id: number, direction: number): void => {
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) return task;

        const presentPosition = statuses.indexOf(task.status);
        const newPosition = presentPosition + direction;

        if (newPosition >= 0 && newPosition < statuses.length) {
          return { ...task, status: statuses[newPosition] };
        }
        return task;
      })
    );
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-center text-3xl font-bold mb-6">
        Task Management{" "}
        <span className="text-blue-600 text-4xl font-extrabold">Kanban</span>
      </h2>

      <div className="flex justify-center items-center mb-6">
        <div className="flex w-[60vw] space-x-2">
          <input
            className="flex-grow border border-gray-300 rounded px-4
             py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task"
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 
            cursor-pointer rounded hover:bg-blue-700 hover:scale-110 transition"
            onClick={taskAdd}
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statuses.map((status) => (
          <div key={status}>
            <h5 className="text-center text-xl font-semibold ">{status}</h5>
            <div
              className={` p-3 rounded shadow min-h-[200px] space-y-2 ${
                status === "Finished"
                  ? "bg-green-400 "
                  : status !== "Incompleted"
                  ? "bg-blue-400"
                  : "bg-red-400"
              } `}
            >
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <div
                    key={task.id}
                    className={`bg-white rounded shadow p-3 
                    flex justify-between items-center
                    ${
                      task.status === "Finished"
                        ? "hover:bg-green-100 hover:font-bold cursor-pointer hover:scale-110 transition"
                        : status !== "Incompleted"
                        ? "hover:bg-blue-100 hover:font-bold cursor-pointer hover:scale-110 transition"
                        : "hover:bg-red-100 hover:font-bold cursor-pointer hover:scale-110 transition"
                    }
                    `}
                  >
                    <span className="text-sm">{task.text}</span>
                    <div className="flex space-x-1">
                      {status !== "Incompleted" && (
                        <button
                          className="text-gray-600 border border-gray-300 
                          rounded px-2 cursor-pointer py-1 text-sm hover:scale-125 transition
                           hover:bg-blue-200"
                          onClick={() => taskMove(task.id, -1)}
                        >
                          ←
                        </button>
                      )}
                      {status !== "Finished" && (
                        <button
                          className="text-gray-600 border border-gray-300 
                          rounded px-2 py-1 cursor-pointer text-sm hover:scale-125 transition
                          hover:bg-green-200"
                          onClick={() => taskMove(task.id, 1)}
                        >
                          →
                        </button>
                      )}
                      <button
                        className="text-red-500 border border-red-300
                         rounded px-2 py-1 cursor-pointer text-sm hover:bg-red-300 
                         hover:scale-125 transition "
                        onClick={() => taskRemove(task.id)}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanTasks;
