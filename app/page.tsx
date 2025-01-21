"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./globals.css";

interface Habit {
  id: number;
  content: string;
  date: string;
}

export default function Home() {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await fetch("http://localhost:3000/habits/today");
        const data = await response.json();
        setHabits(data);
      } catch (error) {
        console.error("Erro ao buscar hábitos:", error);
      }
    };

    fetchHabits();
  }, []);

  return (
    <div className="max-w-2xl w-full bg-gradient-to-br from-purple-900 to-gray-800 rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center text-purple-300 mb-6">
        🌟 Hábitos de Hoje 🌟
      </h2>
      {habits.length > 0 ? (
        <ul className="space-y-6">
          {habits.map((habit) => (
            <motion.li
              key={habit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-purple-700 hover:bg-purple-800 text-white rounded-lg p-4 shadow-md transition"
            >
              <p className="text-lg"></p>
            
      {habit.content.split(', ').map((item, index) => (
        <p key={index} className="text-lg">{item}</p>
          ))}
            </motion.li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-400 animate-pulse">Carregando...</p>
      )}
    </div>
  );
}
