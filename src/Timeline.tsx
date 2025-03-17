import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

const timelineData = [
  {
    year: "2004",
    title: "Born 👶",
    description: "The journey begins!",
    details: "The first chapter of life started with endless possibilities.",
    status: "g",
  },
  {
    year: "2006",
    title: "Location Upgrade I 🚀",
    description: "Move to the nearest small town.",
    details:
      "After a lot of struggle and tough decisions, my family decided to move to the nearest town from our small village for better opportunities for me and my brother.",
    status: "g",
  },
  {
    year: "2007",
    title: "First School 📚",
    description: "Joind my first school.",
    details:
      "The journy of learning started with my first school. It was a nice school with a lot of friends and fun.",
    status: "g",
  },
  {
    year: "2009",
    title: "I Got Brain! 🧠",
    description: "Started performing better than most.",
    details:
      "From a very little age I started outperforming most people of  my age.",
    status: "g",
  },
  {
    year: "2011",
    title: "Became First in class. 🏆",
    description: "Became first in class after skipping a class due to age.",
    details:
      "First big achievement of my life, a moment which made me believe in myslef. It was a big thing for a 7 year old boy.",
    status: "g",
  },
  {
    year: "2016",
    title: "Location Upgrade II 🚀",
    description:
      "The small town didn't have enough opportunities, shifted to a bigger city.",
    details:
      "As I started to learn and grow, my dreams got even bigger. We moved to a big city for a better quality of education and life.",
    status: "g",
  },
  {
    year: "2020",
    title: "Passed 10th Grade 🎓",
    description:
      "Passed 10th grade with 96% marks, becoming 17th in the state.",
    details:
      "After a lot of hard work and dedication, I passed my 10th grade with good marks. It was still not good as expected, but I had clear goals after that.",
    status: "g",
  },
  {
    year: "2020",
    title: "The IIT Dream 🚀",
    description: "Got admission at a reputed coaching institute in Kota.",
    details:
      "After passing 10th grade, the IIT dream was next. I got admission in Allen, Kota. It was a big step towards my dream.",
    status: "g",
  },
  {
    year: "2020",
    title: "The World Stopped 🦠",
    description: "The COVID_19 pandemic hit the world, everything stopped along with my dreams.",
    details:"The world stopped due to the COVID_19 pandemic. Everything was shut down, coaching classes became online. It was a tough time for everyone.",
    status: "r",
  }
];

export default function Timeline() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-8">My Life Timeline</h1>
      <div className="relative w-full max-w-2xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>
        {timelineData.map((event, index) => {
          const isGreen = event.status === "g";
          const dotColor = isGreen
            ? "text-green-500 drop-shadow-[0_0_12px_rgba(34,197,94,1)]"
            : "text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,1)]";
          const textColor = isGreen ? "text-green-400" : "text-red-400";
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`flex items-center justify-${
                isLeft ? "start" : "end"
              } my-6 relative`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredEvent(index)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <div className="w-1/2 flex justify-end pr-4">
                {isLeft && (
                  <motion.div
                    className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-sm transition duration-300 hover:scale-105 hover:bg-gray-800 border border-gray-700"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h2 className={`text-xl font-semibold ${textColor}`}>
                      {event.title}
                    </h2>
                    <h3 className="text-gray-300">{event.year}</h3>
                    <p className="text-gray-500">{event.description}</p>
                  </motion.div>
                )}
              </div>
              <div className="relative w-6 h-6 flex items-center justify-center">
                <FaCircle className={`${dotColor} text-sm`} />
              </div>
              <div className="w-1/2 flex justify-start pl-4">
                {!isLeft && (
                  <motion.div
                    className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-sm transition duration-300 hover:scale-105 hover:bg-gray-800 border border-gray-700"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h2 className={`text-xl font-semibold ${textColor}`}>
                      {event.title}
                    </h2>
                    <h3 className="text-gray-300">{event.year}</h3>
                    <p className="text-gray-500">{event.description}</p>
                  </motion.div>
                )}
              </div>
              {hoveredEvent === index && (
                <motion.div
                  className={`absolute top-1/2 transform -translate-y-1/2 ${
                    isLeft ? "right-full mr-4" : "left-full ml-4"
                  } bg-gray-800 p-4 rounded-lg shadow-lg w-64 text-gray-300 border border-gray-600 before:content-[''] before:absolute before:w-0 before:h-0 before:border-8 before:border-transparent before:top-1/2 before:-translate-y-1/2 ${
                    isLeft
                      ? "before:left-full before:border-l-gray-800"
                      : "before:right-full before:border-r-gray-800"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <p>{event.details}</p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
