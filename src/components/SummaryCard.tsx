import React, { ReactNode } from "react";
import { motion } from "framer-motion";

// Define the props interface for the component
interface SummaryCardProps {
  summaryLogo: ReactNode; // Updated to accept ReactNode (for Lucide Icons)
  summaryName: string;
  summaryTitle: string;
  description: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  summaryLogo,
  summaryName,
  summaryTitle,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-80 rounded-lg shadow-md p-6 max-w-md mx-auto"
    >
      {/* Summary Logo */}
      <div className="flex items-center mb-4">
        {/* Render the passed icon instead of an image */}
        <div className="w-12 h-12 mr-4 text-indigo-500 bg-slate-200 rounded-lg p-2 ">{summaryLogo}</div>
        <div>
          {/* Summary Name and Summary Title */}
          <h3 className="text-xl font-semibold">{summaryName}</h3>
          <p className="text-gray-500 text-xs font-normal">{summaryTitle}</p>
        </div>
      </div>

      {/* Summary Description */}
      <p className="text-gray-600 text-[0.83rem] text-left tracking-wide font-light">{description}</p>
    </motion.div>
  );
};

export default SummaryCard;
