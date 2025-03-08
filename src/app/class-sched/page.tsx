"use client";

import React, { useState } from "react";

interface Person {
  id: string;
  name: string;
  type: "teacher" | "adviser";
  assignedSlots: number;
}

interface Timeslot {
  id: string;
  day: string;
  time: string;
  assignedPerson: Person | null;
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const timeslots = [
  "6:00am - 7:00am",
  "7:00am - 8:00am",
  "8:00am - 9:00am",
  "9:10am - 10:10am",
  "10:10am - 11:10am",
  "11:10am - 12:10pm",
  "12:15pm - 1:15pm",
  "1:15pm - 2:15pm",
];

export default function Home() {
  const [teachers, setTeachers] = useState<Person[]>([]);
  const [advisers, setAdvisers] = useState<Person[]>([]);
  const [schedule, setSchedule] = useState<Timeslot[]>(
    days.flatMap((day) =>
      timeslots.map((time) => ({
        id: `${day}-${time}`,
        day,
        time,
        assignedPerson: null,
      }))
    )
  );

  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState<"teacher" | "adviser">("teacher");

  const addPerson = () => {
    if (!newName.trim()) return;

    const newPerson: Person = {
      id: Math.random().toString(36).substr(2, 9),
      name: newName,
      type: newType,
      assignedSlots: 0,
    };

    if (newType === "teacher") {
      setTeachers([...teachers, newPerson]);
    } else {
      setAdvisers([...advisers, newPerson]);
    }

    setNewName("");
  };

  const removePerson = (id: string) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    const updatedAdvisers = advisers.filter((adviser) => adviser.id !== id);

    setTeachers(updatedTeachers);
    setAdvisers(updatedAdvisers);

    // Remove the person from the schedule
    const updatedSchedule = schedule.map((slot) =>
      slot.assignedPerson?.id === id ? { ...slot, assignedPerson: null } : slot
    );
    setSchedule(updatedSchedule);
  };

  const assignPersonToSlot = (slotId: string, person: Person) => {
    if (
      (person.type === "teacher" && person.assignedSlots >= 6) ||
      (person.type === "adviser" && person.assignedSlots >= 5)
    ) {
      alert(`${person.name} has reached the maximum assigned slots.`);
      return;
    }

    const updatedSchedule = schedule.map((slot) =>
      slot.id === slotId ? { ...slot, assignedPerson: person } : slot
    );

    const updatedPerson = { ...person, assignedSlots: person.assignedSlots + 1 };

    if (person.type === "teacher") {
      setTeachers(teachers.map((t) => (t.id === person.id ? updatedPerson : t)));
    } else {
      setAdvisers(advisers.map((a) => (a.id === person.id ? updatedPerson : a)));
    }

    setSchedule(updatedSchedule);
  };

  const removePersonFromSlot = (slotId: string) => {
    const updatedSchedule = schedule.map((slot) =>
      slot.id === slotId ? { ...slot, assignedPerson: null } : slot
    );
  
    const slot = schedule.find((s) => s.id === slotId);
    if (slot?.assignedPerson) {
      const person = slot.assignedPerson;
      const updatedPerson = { ...person, assignedSlots: person.assignedSlots - 1 };
  
      if (person.type === "teacher") {
        setTeachers((prevTeachers) =>
          prevTeachers.map((t) => (t.id === person.id ? updatedPerson : t))
        );
      } else {
        setAdvisers((prevAdvisers) =>
          prevAdvisers.map((a) => (a.id === person.id ? updatedPerson : a))
        );
      }
    }
  
    setSchedule(updatedSchedule);
  };

  // Filter out teachers and advisers who have reached their maximum assigned slots
  const availableTeachers = teachers.filter((teacher) => teacher.assignedSlots < 6);
  const availableAdvisers = advisers.filter((adviser) => adviser.assignedSlots < 5);

  return (
    <div className="min-h-screen bg-gray-100 p-6 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Class Scheduler</h1>

        {/* Add Teacher/Adviser Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Add Teacher/Adviser
          </h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={newType}
              onChange={(e) => setNewType(e.target.value as "teacher" | "adviser")}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="teacher">Teacher</option>
              <option value="adviser">Adviser</option>
            </select>
            <button
              onClick={addPerson}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add
            </button>
          </div>
        </div>

        {/* List of Teachers and Advisers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Teachers</h2>
            <ul className="space-y-2">
              {teachers.map((teacher) => (
                <li
                  key={teacher.id}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-gray-700">
                    {teacher.name} 
                  </span>
                  <button
                    onClick={() => removePerson(teacher.id)}
                    className="text-red-500 hover:text-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Advisers</h2>
            <ul className="space-y-2">
              {advisers.map((adviser) => (
                <li
                  key={adviser.id}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-gray-700">
                    {adviser.name}
                  </span>
                  <button
                    onClick={() => removePerson(adviser.id)}
                    className="text-red-500 hover:text-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left text-gray-700">Time</th>
                  {days.map((day) => (
                    <th key={day} className="p-3 text-left text-gray-700">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeslots.map((time) => (
                  <tr key={time} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3 text-gray-700">{time}</td>
                    {days.map((day) => {
                      const slot = schedule.find((s) => s.day === day && s.time === time);
                      return (
                        <td key={`${day}-${time}`} className="p-3">
                          {slot?.assignedPerson ? (
                            <div className="flex flex-col items-center space-y-1">
                              <span className="text-gray-700">
                                {slot.assignedPerson.name}
                              </span>
                              <button
                                onClick={() => removePersonFromSlot(slot.id)}
                                className="text-red-500 hover:text-red-600 transition-colors"
                              >
                                Remove
                              </button>
                            </div>
                          ) : (
                            <select
                              onChange={(e) => {
                                const person = [...availableTeachers, ...availableAdvisers].find(
                                  (p) => p.id === e.target.value
                                );
                                if (person) assignPersonToSlot(slot!.id, person);
                              }}
                              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value=""></option>
                              {[...availableTeachers, ...availableAdvisers].map((person) => (
                                <option key={person.id} value={person.id}>
                                  {person.name} ({person.type})
                                </option>
                              ))}
                            </select>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}